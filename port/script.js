// 1. Dark Mode Toggle
document.getElementById("toggleDark").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. EmailJS Integration
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // 🔑 Replace this with your public key from EmailJS
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function(response) {
      document.getElementById("statusMsg").innerText = "✅ Message sent successfully!";
    }, function(error) {
      document.getElementById("statusMsg").innerText = "❌ Failed to send message.";
    });

  this.reset(); // Clear the form after sending
});
