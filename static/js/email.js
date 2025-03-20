(function () {
    emailjs.init("_C0_dxDNUivISN_BA"); // Replace with your EmailJS Public Key
})();
(function () {
    // Apply theme on page load based on localStorage
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Toggle dark mode function
    window.toggleDarkMode = function () {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    };
})();

document.addEventListener("DOMContentLoaded", function () {
   const moreButton = document.getElementById("more-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    const form = document.getElementById("contact-form");

    if (form) {
        console.log("✅ Contact form found"); // Debugging check

        // ✅ Prevent duplicate event listeners
        if (!form.dataset.listener) {
            form.dataset.listener = "true";

            form.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent default form submission
                console.log("📩 Sending message..."); // Debugging check

                emailjs.sendForm("service_ulhmi44", "template_kukmhdd", this)
                    .then(function (response) {
                        console.log("✅ Message sent successfully!", response);
                        alert("Message sent successfully!");
                        form.reset();
                    }, function (error) {
                        console.error("❌ Failed to send message", error);
                        alert("Failed to send message: " + error.text);
                    });
            });
        }
    } else {
        console.error("❌ Contact form NOT found"); // Debugging check
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


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        console.log("✅ Contact form found"); // Debugging check

        // ✅ Prevent duplicate event listeners
        if (!form.dataset.listener) {
            form.dataset.listener = "true";

            form.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent default form submission
                console.log("📩 Sending message..."); // Debugging check

                emailjs.sendForm("service_0xole5s", "template_axgk2gb", this)
                    .then(function (response) {
                        console.log("✅ Message sent successfully!", response);
                        alert("Message sent successfully!");
                        form.reset();
                    }, function (error) {
                        console.error("❌ Failed to send message", error);
                        alert("Failed to send message: " + error.text);
                    });
            });
        }
    } else {
        console.error("❌ Contact form NOT found"); // Debugging check
    }
});