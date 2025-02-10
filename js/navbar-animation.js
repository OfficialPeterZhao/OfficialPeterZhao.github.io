document.addEventListener("DOMContentLoaded", function() {
    const navbarBrand = document.querySelector(".navbar-brand");
    const icon = document.getElementById("logo-icon");

    if (navbarBrand && icon) {
        navbarBrand.addEventListener("click", function(event) {
            event.preventDefault(); 

            document.querySelector("#about").scrollIntoView({
                behavior: "smooth"
            });

            icon.style.transition = "transform 0.5s ease-in-out";
            icon.style.transform = "translateY(-10px)";

            setTimeout(() => {
                icon.style.transform = "translateY(0)";
            }, 500);
        });
    }
});



