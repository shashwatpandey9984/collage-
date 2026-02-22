// Navbar dropdown toggle
const btn = document.getElementById("coursesBtn");
const dropdown = document.getElementById("coursesDropdown");

btn.addEventListener("click", function(e) {
  e.preventDefault();
  dropdown.classList.toggle("active");
});

// Close dropdown if click outside
document.addEventListener("click", function(e) {
  if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
