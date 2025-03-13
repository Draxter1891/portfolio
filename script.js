document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("video").playbackRate = 0.5; // 0.5 = 50% speed
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
      return;
    }

    // Disable submit button to prevent double submission
    document.getElementById("submit-btn").disabled = true;

    sendMail(); // Call function to send mail
  });

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_r3p6wa2"; // Your EmailJS Service ID
  const templateID = "template_bgil9qm"; // Your EmailJS Template ID

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      console.log("Email Sent: ", res);
      alert("Your message was sent successfully!");

      // Reset form after success
      document.getElementById("contact-form").reset();

      // Re-enable the submit button after 2 seconds
      setTimeout(() => {
        document.getElementById("submit-btn").disabled = false;
      }, 2000);
    })
    .catch((err) => {
      console.log("Error: ", err);
      alert("Something went wrong. Please try again.");

      // Re-enable submit button in case of error
      document.getElementById("submit-btn").disabled = false;
    });
}

// ---- PROJECT AUTO-SCROLL FUNCTION ----
let index = 0;
const projectsWrapper = document.querySelector(".projects-wrapper");
const totalProjects = document.querySelectorAll(".project").length;
const projectsPerView = 3;

function autoScrollProjects() {
  index++;
  if (index > totalProjects - 1) {
    index = 0;
  }
  let translateValue = -index * (100 / projectsPerView) + "%";
  projectsWrapper.style.transform = "translateX(" + translateValue + ")";
}

// Run auto-scroll every 3 seconds
setInterval(autoScrollProjects, 3000);
