from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv

from services.whatsapp import process_message, send_ultramsg_message

# Carrega variáveis de ambiente (.env)
load_dotenv()

app = FastAPI(title="SDR WhatsApp - Protótipo")


@app.get("/")
def root():
    return {"status": "SDR WhatsApp rodando com sucesso 🚀"}


class WhatsAppMessage(BaseModel):
    from_number: str
    message: str


@app.post("/whatsapp/webhook")
def whatsapp_webhook(data: WhatsAppMessage):
    # Processa a mensagem (SDR)
    reply = process_message(data.from_number, data.message)

    # Envia resposta pelo WhatsApp real (UltraMsg)
    send_ultramsg_message(data.from_number, reply)

    # Retorno apenas para debug / testes
    return {
        "to": data.from_number,
        "message": reply,
        "status": "mensagem enviada com sucesso"
    }
