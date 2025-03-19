(function(){
    emailjs.init("_C0_dxDNUivISN_BA"); // Replace with your EmailJS Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        emailjs.sendForm("service_0xole5s", "template_axgk2gb", this)
            .then(function() {
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset();
            }, function(error) {
                alert("Failed to send message: " + error.text);
            });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    // Check if dark mode is enabled in local storage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
    }

    // Toggle dark mode function
    window.toggleDarkMode = function () {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            console.log("Dark mode enabled"); // Debugging
        } else {
            localStorage.setItem("theme", "light");
            console.log("Light mode enabled"); // Debugging
        }
    };
});
document.addEventListener("DOMContentLoaded", function () {
    const moreButton = document.getElementById("more-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    moreButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click from bubbling up
        dropdownMenu.classList.toggle("hidden");
        moreButton.classList.toggle("active");
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!moreButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add("hidden");
            moreButton.classList.remove("active");
        }
    });
});
