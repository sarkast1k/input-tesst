    document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='text']:nth-of-type(2)");
    const image = document.querySelector(".image");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (emailInput.value !== "" && passwordInput.value !== "") {
            image.src = "image/acikkilit.png";
        }
    });
});