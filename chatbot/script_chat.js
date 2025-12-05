const chatbox = document.getElementById("chatbox");

// Questions prédéfinies avec leurs réponses
const questions = [
  {
    id: "prix",
    text: "💰 Quels sont vos tarifs ?",
    response: "Nos tarifs varient selon vos besoins :<br>• Formule Basic : 29€/mois<br>• Formule Pro : 59€/mois<br>• Formule Premium : 99€/mois"
  },
  {
    id: "horaires",
    text: "🕐 Quels sont vos horaires ?",
    response: "Nous sommes ouverts du lundi au vendredi de 9h à 18h. Fermé le week-end."
  },
  {
    id: "contact",
    text: "📧 Comment vous contacter ?",
    response: "Vous pouvez nous contacter :<br>• Email : contact@exemple.com<br>• Téléphone : 01 23 45 67 89<br>• Ou via notre formulaire de contact"
  },
  {
    id: "services",
    text: "🛠️ Quels services proposez-vous ?",
    response: "Nous proposons :<br>• Développement web<br>• Design graphique<br>• Marketing digital<br>• Maintenance et support"
  }
];

// Fonction pour ajouter un message
function addMessage(text, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `msg ${isUser ? 'user' : 'bot'}`;
  messageDiv.innerHTML = isUser ? `<strong>Vous :</strong> ${text}` : `<strong>Bot :</strong> ${text}`;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Fonction pour créer les boutons de choix
function showChoices() {
  const choicesDiv = document.createElement('div');
  choicesDiv.className = 'choices';
  choicesDiv.style.cssText = 'display: flex; flex-direction: column; gap: 10px; margin: 15px 0;';
  
  questions.forEach(q => {
    const btn = document.createElement('button');
    btn.textContent = q.text;
    btn.className = 'choice-btn';
    btn.style.cssText = 'padding: 12px 20px; border: 2px solid #007bff; background: white; color: #007bff; border-radius: 8px; cursor: pointer; font-size: 14px; transition: all 0.3s;';
    
    // Effets hover
    btn.onmouseenter = () => {
      btn.style.background = '#007bff';
      btn.style.color = 'white';
    };
    btn.onmouseleave = () => {
      btn.style.background = 'white';
      btn.style.color = '#007bff';
    };
    
    btn.onclick = () => handleChoice(q);
    choicesDiv.appendChild(btn);
  });
  
  chatbox.appendChild(choicesDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Fonction pour gérer le choix de l'utilisateur
function handleChoice(question) {
  // Supprimer les boutons précédents
  const oldChoices = chatbox.querySelectorAll('.choices');
  oldChoices.forEach(choice => choice.remove());
  
  // Afficher la question choisie
  addMessage(question.text, true);
  
  // Afficher la réponse après un délai
  setTimeout(() => {
    addMessage(question.response);
    
    // Ajouter un bouton "Autre question ?"
    setTimeout(() => {
      const resetDiv = document.createElement('div');
      resetDiv.style.cssText = 'margin: 15px 0; text-align: center;';
      
      const resetBtn = document.createElement('button');
      resetBtn.textContent = '🔄 Poser une autre question';
      resetBtn.className = 'reset-btn';
      resetBtn.style.cssText = 'padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px;';
      
      resetBtn.onmouseenter = () => resetBtn.style.background = '#218838';
      resetBtn.onmouseleave = () => resetBtn.style.background = '#28a745';
      
      resetBtn.onclick = () => {
        resetDiv.remove();
        showChoices();
      };
      
      resetDiv.appendChild(resetBtn);
      chatbox.appendChild(resetDiv);
      chatbox.scrollTop = chatbox.scrollHeight;
    }, 300);
  }, 600);
}

// Message de bienvenue et affichage des choix au chargement
addMessage("Bonjour 😊 ! Comment puis-je vous aider aujourd'hui ?");
setTimeout(() => showChoices(), 500);