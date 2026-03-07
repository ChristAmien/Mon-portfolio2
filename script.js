// MENU HAMBURGER
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Fermer le menu au clic en dehors
document.addEventListener("click", function (e) {
    const nav = document.getElementById("nav-hamburger");
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (nav && !nav.contains(e.target)) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});

// FORMULAIRE
const form = document.querySelector(".form1");
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

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
    formMessage.textContent = "Merci ! Votre message est prêt à être envoyé.";
    form.reset();
});

// SCROLL ANIMATION
const observerOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const elementsToObserve = [
    ".text-title",
    ".profile-carre",
    ".text-description",
    ".stat-item",
    ".project-card",
    ".skill-card",
    ".rdv-container",
    ".footer-content",
    ".section-logo",
    ".reveal",
    ".reveal-left",
    ".reveal-right",
    ".reveal-scale"
];

elementsToObserve.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, index) => {
        if (el.classList.contains("skill-card") || el.classList.contains("stat-item")) {
            el.style.transitionDelay = `${index * 0.07}s`;
        }
        scrollObserver.observe(el);
    });
});

// LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 2.5s ease";
        setTimeout(() => {
            loader.style.display = "none";
        }, 2500);
    }
});

// NAVBAR ACTIVE LINK au scroll
const sections = document.querySelectorAll("section[id], h1[id]");
const navLinks = document.querySelectorAll(".nav-link a, .menu-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

    // Navbar scroll shadow
    const header = document.querySelector("header");
    if (window.scrollY > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

 setTimeout(() => {
    document.getElementById('title').classList.add('visible');
  }, 100);

  // barres s'animent à l'entrée 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80); // stagger
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.skill-box').forEach(el => observer.observe(el));