// Scroll to section smoothly
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Form validation
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let status = document.getElementById("form-status");

  if (name === "" || email === "" || message === "") {
    status.innerHTML = "⚠️ Please fill all fields.";
    status.style.color = "red";
    return false;
  }

  if (!email.includes("@")) {
    status.innerHTML = "⚠️ Please enter a valid email.";
    status.style.color = "red";
    return false;
  }

  status.innerHTML = "✅ Message sent successfully!";
  status.style.color = "green";

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  return false; // prevent actual form submission
}