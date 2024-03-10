// Get the hamburger menu button and the navigation links
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Add event listener to the hamburger menu button
hamburger.addEventListener("click", () => {
    // Toggle the "active" class on the navigation links to show/hide them
    navLinks.classList.toggle("active");
});
document.getElementById('hamburger-icon').addEventListener('click', function() {
    document.querySelector('.nav-right ul').classList.toggle('vertical');
});
