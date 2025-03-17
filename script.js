document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("video").playbackRate = 0.5;
});

// Toggle Mobile Menu
function toggleMenu() {
  console.log("button clicked")
  let nav = document.getElementById("mobile-nav");
  let hamburger = document.querySelector(".hamburger");

  if (!nav || !hamburger) {
    console.error("Navbar or hamburger element not found.");
    return;
  }

  nav.classList.toggle("active");

  // Change hamburger icon when toggling
hamburger.innerHTML = nav.classList.contains("active") ?  "✖" : "☰";
}

document.addEventListener("DOMContentLoaded", function () {
  let hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }
});

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


//Projects section
const projectsWrapper = document.querySelector(".projects-wrapper");
let isDragging = false;
let startX, scrollLeft;

projectsWrapper.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - projectsWrapper.offsetLeft;
  scrollLeft = projectsWrapper.scrollLeft;
  projectsWrapper.style.cursor = "grabbing"; // Visual feedback
});

projectsWrapper.addEventListener("mouseleave", () => {
  isDragging = false;
  projectsWrapper.style.cursor = "grab";
});

projectsWrapper.addEventListener("mouseup", () => {
  isDragging = false;
  projectsWrapper.style.cursor = "grab";
});

projectsWrapper.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - projectsWrapper.offsetLeft;
  const walk = (x - startX) * 2; // Adjust speed
  projectsWrapper.scrollLeft = scrollLeft - walk;
});
