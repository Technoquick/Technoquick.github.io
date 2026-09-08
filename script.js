document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Auto-Typing Effect for Hero Section
    const textArray = ["Web Developer.", "Frontend Engineer.", "Full Stack Specialist."];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    function type() {
        if (count === textArray.length) {
            count = 0;
        }
        currentText = textArray[count];
        letter = currentText.slice(0, ++index);

        const typingElement = document.querySelector(".typing-text");
        if (typingElement) {
            typingElement.textContent = letter;
        }

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Wait time before switching words
        } else {
            setTimeout(type, 100); // Speed of typing letters
        }
    }
    type();

    // 2. Mobile Menu Toggle Logic
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinksContainer = document.querySelector(".nav-links");

    if (mobileMenu && navLinksContainer) {
        mobileMenu.addEventListener("click", () => {
            navLinksContainer.classList.toggle("active");
            const icon = mobileMenu.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });
    }

    // 3. Smooth Scroll & Close Mobile Menu on Click
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            
            // Only apply custom scroll if it's an anchor link
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }

                // Close mobile menu if open
                if (navLinksContainer.classList.contains("active")) {
                    navLinksContainer.classList.remove("active");
                    const icon = mobileMenu.querySelector("i");
                    if (icon) {
                        icon.classList.add("fa-bars");
                        icon.classList.remove("fa-xmark");
                    }
                }
            }
        });
    });

    // 4. Highlight Active Navigation Link on Scroll
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Offset for fixed navbar
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active-link");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active-link");
            }
        });
    });

    // 5. Contact Form Submission Handler
    const contactForm = document.querySelector(".contact-section form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Basic UI feedback for submission
            const submitBtn = contactForm.querySelector('input[type="submit"]');
            const originalValue = submitBtn.value;
            
            submitBtn.value = "Sending...";
            submitBtn.disabled = true;

            setTimeout(() => {
                alert("Thank you! Your message has been sent successfully.");
                contactForm.reset();
                submitBtn.value = originalValue;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
});