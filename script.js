document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("video").playbackRate = 0.5;
});

// Toggle Mobile Menu
function toggleMenu() {
  let nav = document.getElementById("mobile-nav");
  let hamburger = document.querySelector(".hamburger");

  nav.classList.toggle("active");

  // Change hamburger icon when toggling
  if (nav.classList.contains("active")) {
    hamburger.innerHTML = "✖"; // Close icon
  } else {
    hamburger.innerHTML = "☰"; // Menu icon
  }
}

// Contact Form Submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    document.getElementById("submit-btn").disabled = true;

    sendMail();
  });

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_r3p6wa2", "template_bgil9qm", params)
    .then(() => {
      alert("Your message was sent successfully!");
      document.getElementById("contact-form").reset();
      document.getElementById("submit-btn").disabled = false;
    })
    .catch(() => {
      alert("Something went wrong. Please try again.");
      document.getElementById("submit-btn").disabled = false;
    });
}

// Project Auto-Scroll Function
let index = 0;
const projectsWrapper = document.querySelector(".projects-wrapper");
const totalProjects = document.querySelectorAll(".project").length;
const projectsPerView = 3;

function autoScrollProjects() {
  index++;
  if (index > totalProjects - projectsPerView) {
    index = 0;
  }
  let translateValue = -index * (100 / projectsPerView) + "%";
  projectsWrapper.style.transform = "translateX(" + translateValue + ")";
}

// Run auto-scroll every 3 seconds
setInterval(autoScrollProjects, 3000);
