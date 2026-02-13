import requests
import os

ULTRAMSG_INSTANCE = os.getenv("ULTRAMSG_INSTANCE")
ULTRAMSG_TOKEN = os.getenv("ULTRAMSG_TOKEN")


def process_message(from_number: str, message: str):
    message = message.lower()

    if "oi" in message or "olá" in message:
        return (
            "Olá! 👋\n"
            "Sou o assistente de agendamento.\n\n"
            "Gostaria de agendar uma visita com nosso consultor?\n"
            "Responda com *SIM* ou *NÃO*."
        )

    if "sim" in message:
        return (
            "Perfeito! 📅\n"
            "Qual o melhor dia para você?\n"
            "Exemplo: 15/01 pela manhã."
        )

    if "não" in message:
        return (
            "Sem problemas 😊\n"
            "Ficamos à disposição quando precisar."
        )

    return (
        "Não entendi sua resposta 🤔\n"
        "Por favor, responda com *SIM* ou *NÃO*."
    )


def send_ultramsg_message(phone: str, message: str):
    url = f"https://api.ultramsg.com/{ULTRAMSG_INSTANCE}/messages/chat"

    payload = {
        "token": ULTRAMSG_TOKEN,
        "to": phone,
        "body": message
    }

    response = requests.post(url, data=payload)
    return response.json()
