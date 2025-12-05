const chatbox = document.getElementById("chatbox");
const input = document.getElementById("userInput");

document.getElementById("sendBtn").onclick = function () {
    let message = input.value.trim();
    if (message === "") return;

    addMessage("Vous", message, "user");
    input.value = "";

    // Réponses prédéfinies
    let réponse = "Je n’ai pas compris, pouvez-vous reformuler ?";
    if (message.includes("bonjour")) réponse = "Bonjour 😊 ! Comment puis-je vous aider ?";
    if (message.includes("prix")) réponse = "Nos tarifs sont disponibles sur la page 'Tarifs'.";
    if (message.includes("contact")) réponse = "Vous pouvez nous écrire via la page 'Contact'.";
    
    setTimeout(() => addMessage("Bot", réponse, "bot"), 500);
}

function addMessage(sender, text, cls) {
    chatbox.innerHTML += `<div class='msg ${cls}'><strong>${sender} :</strong> ${text}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;
}