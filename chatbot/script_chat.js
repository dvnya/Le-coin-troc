const chatbox = document.getElementById("chatbox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Base de réponses organisée
const responses = {
  salutations: {
    keywords: ["bonjour", "salut", "hello", "coucou", "bonsoir", "hi"],
    response: "Bonjour 😊 ! Comment puis-je vous aider aujourd'hui ?"
  },
  prix: {
    keywords: ["prix", "tarif", "coût", "combien", "payer"],
    response: "Nos tarifs sont disponibles sur la page 'Tarifs'. Souhaitez-vous plus d'informations ?"
  },
  contact: {
    keywords: ["contact", "joindre", "écrire", "appeler", "téléphone"],
    response: "Vous pouvez nous contacter via la page 'Contact' ou par email à contact@exemple.com."
  },
  horaires: {
    keywords: ["horaire", "ouvert", "ferme", "disponible"],
    response: "Nous sommes ouverts du lundi au vendredi de 9h à 18h."
  },
  aide: {
    keywords: ["aide", "help", "assistance"],
    response: "Je peux vous renseigner sur nos tarifs, nos horaires, ou vous indiquer comment nous contacter. Que souhaitez-vous savoir ?"
  }
};

// Fonction pour trouver la meilleure réponse
function findResponse(message) {
  const lowerMessage = message.toLowerCase().trim();
  
  for (let category in responses) {
    const { keywords, response } = responses[category];
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      return response;
    }
  }
  
  return "Je n'ai pas compris votre question. Vous pouvez me demander des informations sur nos prix, horaires ou comment nous contacter.";
}

// Fonction pour ajouter un message
function addMessage(sender, text, cls) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `msg ${cls}`;
  messageDiv.innerHTML = `<strong>${sender} :</strong> ${text}`;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Fonction pour envoyer un message
function sendMessage() {
  const message = input.value.trim();
  
  if (message === "") return;
  
  // Afficher le message utilisateur
  addMessage("Vous", message, "user");
  input.value = "";
  
  // Désactiver le bouton pendant la réponse
  sendBtn.disabled = true;
  
  // Simuler un délai de réponse
  setTimeout(() => {
    const response = findResponse(message);
    addMessage("Bot", response, "bot");
    sendBtn.disabled = false;
    input.focus();
  }, 500);
}

// Gestionnaire d'événement pour le bouton
sendBtn.onclick = sendMessage;

// Permettre l'envoi avec la touche Entrée
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});