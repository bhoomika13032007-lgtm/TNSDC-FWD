document.getElementById('contactForm').onsubmit = function(event) {
  event.preventDefault();
  document.getElementById('response').textContent = "Thank you for your message!";
  this.reset();
};