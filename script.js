function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const form = document.querySelector(".form1");
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi classique

    const email = form.querySelector('input[name="email"]').value.trim();
    const nom = form.querySelector('input[name="Nom"]').value.trim();
    const sujet = form.querySelector('input[name="sujet"]').value.trim();
    const message = form.querySelector('textarea[name="description"]').value.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!emailRegex.test(email)) {
        formMessage.style.display = "block";
        formMessage.style.color = "red";
        formMessage.textContent = "Veuillez entrer un email valide !";
        return;
    }

    const mailtoLink = `mailto:christamien13@gmail.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent("Nom: " + nom + "\nEmail: " + email + "\nMessage: " + message)}`;

    window.location.href = mailtoLink;

    formMessage.style.display = "block";
    formMessage.style.color = "green";
    formMessage.textContent = "Merci ! Votre message est prêt à être envoyé depuis votre messagerie.";

    form.reset();
});
