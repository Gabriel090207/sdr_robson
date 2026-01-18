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

    # Tenta ler payload (POST ou GET)
    try:
        if request.method == "POST":
            payload = await request.json()
        else:
            payload = dict(request.query_params)
    except Exception as e:
        print("❌ Erro ao ler payload:", e)

    print("📩 Payload recebido:", payload)

    # UltraMsg pode variar os campos
    from_number = (
        payload.get("from")
        or payload.get("from_number")
        or payload.get("phone")
        or payload.get("chatId")
    )

    message = (
        payload.get("body")
        or payload.get("message")
        or payload.get("text")
    )

    if not from_number or not message:
        print("⚠️ Payload inválido, ignorado")
        return {"status": "ignored"}

    # Processa mensagem (SDR)
    reply = process_message(from_number, message)

    # Envia resposta no WhatsApp
    send_ultramsg_message(from_number, reply)

    return {"status": "ok"}
