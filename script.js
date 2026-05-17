// Dynamic Auto-Typing Effect for Hero Section
const textArray = ["Web Developer.", "Frontend Engineer.", "UI Specialist."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === textArray.length) {
        count = 0;
    }
    currentText = textArray[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait time before switching words
    } else {
        setTimeout(type, 100); // Speed of typing letters
    }
}());

// Mobile Menu Toggle Logic
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Toggle the burger menu icon to a close icon if desired
    const icon = mobileMenu.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

// Close menu when a link is clicked on mobile devices
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = mobileMenu.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });
});