function openModal(type) {
    const modals = {
        'login': 'loginModal',
        'signup': 'signupModal',
        'contact': 'contactModal'
    };
    document.getElementById(modals[type]).classList.add('active');
}

function closeModal(type) {
    const modals = {
        'login': 'loginModal',
        'signup': 'signupModal',
        'contact': 'contactModal'
    };
    document.getElementById(modals[type]).classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// Prevent form submission for demo
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Fonctionnalité de démonstration - Formulaire non envoyé');
        });
    });
});