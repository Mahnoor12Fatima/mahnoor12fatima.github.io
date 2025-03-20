(function () {
    emailjs.init("_C0_dxDNUivISN_BA"); // Replace with your EmailJS Public Key
})();
window.toggleDarkMode = function () {
    const body = document.body;
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const body = document.body;
    const moreButton = document.getElementById("more-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // ✅ Prevent multiple event listeners
    if (!form.dataset.listener) {
        form.dataset.listener = "true"; // Flag to prevent duplicate listeners

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            emailjs.sendForm("service_0xole5s", "template_axgk2gb", this)
                .then(function () {
                    alert("Message sent successfully!");
                    form.reset();
                }, function (error) {
                    alert("Failed to send message: " + error.text);
                });
        });
    }



    // ✅ Dropdown Menu
    if (moreButton && dropdownMenu) {
        moreButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents the click from bubbling up
            dropdownMenu.classList.toggle("hidden");
            moreButton.classList.toggle("active");
        });

        document.addEventListener("click", function (event) {
            if (!moreButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add("hidden");
                moreButton.classList.remove("active");
            }
        });
    }
});
