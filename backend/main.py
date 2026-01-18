from fastapi import FastAPI, Request
from dotenv import load_dotenv

from services.whatsapp import process_message, send_ultramsg_message

# Carrega variáveis de ambiente
load_dotenv()

app = FastAPI(title="SDR WhatsApp - Protótipo")


@app.get("/")
def root():
    return {"status": "SDR WhatsApp rodando com sucesso 🚀"}


@app.api_route("/whatsapp/webhook", methods=["GET", "POST"])
async def whatsapp_webhook(request: Request):
    payload = {}

    try:
        if request.method == "POST":
            payload = await request.json()
        else:
            payload = dict(request.query_params)
    except Exception as e:
        print("❌ Erro ao ler payload:", e)

    print("📩 Payload recebido:", payload)

    # Caso seja payload simples (teste via navegador)
    if "from" in payload and "body" in payload:
        from_number = payload.get("from")
        message = payload.get("body")
    else:
        # Payload padrão UltraMsg
        data = payload.get("data", {})

        # Ignora mensagens enviadas pelo próprio bot
        if data.get("fromMe") is True:
            print("🔁 Mensagem do bot ignorada")
            return {"status": "ignored"}

        from_number = data.get("from")
        message = data.get("body")

    if not from_number or not message:
        print("⚠️ Payload inválido, ignorado")
        return {"status": "ignored"}

    # Limpa o número (remove @c.us)
    from_number = from_number.replace("@c.us", "")

    print(f"📨 Mensagem recebida de {from_number}: {message}")

    # Processa mensagem (SDR)
    reply = process_message(from_number, message)

    # Envia resposta no WhatsApp
    send_ultramsg_message(from_number, reply)

    return {"status": "ok"}
