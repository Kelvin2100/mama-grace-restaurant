// MOBILE MENU

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
}

// SCROLL REVEAL MOTION
const revealTargets = document.querySelectorAll(
    ".hero-content, .section, .menu-card, .gallery-placeholder, .contact-form"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal", "is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    revealTargets.forEach(function (target, index) {
        target.classList.add("reveal");
        target.style.transitionDelay = index * 80 + "ms";
        revealObserver.observe(target);
    });
} else {
    revealTargets.forEach(function (target) {
        target.classList.add("reveal", "is-visible");
    });
}

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please complete all fields.";
            formMessage.style.color = "#b91c1c";
            return;
        }

        formMessage.textContent = "Thank you! Your message has been received.";
        formMessage.style.color = "#166534";
        contactForm.reset();
    });
}
