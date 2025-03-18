(function(){
    emailjs.init("Dfh0A1Xz9-jQgaGs9"); // Replace with your EmailJS Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        emailjs.sendForm("service_ulhmi44", "template_kukmhdd", this)
            .then(function() {
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset();
            }, function(error) {
                alert("Failed to send message: " + error.text);
            });
    });
});