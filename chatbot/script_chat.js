const chatbox = document.getElementById("chatbox");

// Questions prédéfinies avec leurs réponses
const questions = [
  {
    id: "presentation",
    text: "❓ Qu'est-ce que ce site ?",
    response: "Nous sommes une plateforme géniale mieux que LeBonCoin mais sans payer 😉.<br> Bon rien n'est réellement gratuit donc faudra donner quelque chose en échange."
  },
  {
    id: "fonctionnement",
    text: "🔄 Comment fonctionne le troc ?",
    response: "Baaaah tu choisi un objet qui te plaît, tu proposes un de tes objets en échange (si t'en a pas tu te débrouille) et si l'autre est d'accord vous procédez à l'échange.(ou pas)"
  },
  {
    id: "types-objets",
    text: "📱 Quels types d'objets puis-je échanger ?",
    response: "Tout ce qui est en lien avec l'informatique mais on peut s'arranger si c'est ton chat 😼"
  },
  {
    id: "objets-interdits",
    text: "🚫 Quels objets sont interdits ?",
    response: "Ton patron, ta belle-mère, ton chien qui fait caca partout et tous les trucs relous que tu peux avoir. (Si c'est null tu gardes nous non plus on en veut pas)"
  },
  {
    id: "deposer-objet",
    text: "📤 Comment déposer un objet ?",
    response: "Je sais pas moi t'as qu'à suivre au feeling !"
  },
  {
    id: "proposer-echange",
    text: "🤝 Comment proposer un échange ?",
    response: "Tu cliques sur un bouton et c'es bouclé ! ouiiii c'est aussi facile que ça. Enfin j'espère pour toi."
  },
  {
    id: "echange-immediat",
    text: "⏱️ L'échange est-il immédiat ?",
    response: "Échange? Quel échange? T'as cru que c'était Amazon ici ? C'est ni repris ni remboursé."
  },
  {
    id: "verification",
    text: "✅ Les objets sont-ils vérifiés ?",
    response: "Ils existent c'est déjà pas mal non ? Après pour le reste débrouille toi."
  },
  {
    id: "eviter-problemes",
    text: "🛡️ Comment éviter les mauvaises surprises ?",
    response: "En vrai de vrai vas sur un autre site hein. Ici c'est chacun pour soi."
  },
  {
    id: "annuler",
    text: "❌ Puis-je annuler une proposition ?",
    response: "Non en fait tu t'es engagé c'est à la vie à la mort maintenant. Fallait pas cliquer sur le bouton"
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