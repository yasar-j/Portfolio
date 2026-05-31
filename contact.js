

// Smooth navbar shadow on scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "rgba(0,0,0,0.7)";
    }
    else{
        navbar.style.background = "rgba(0,0,0,0.4)";
    }

});


// Contact Form Alert

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message sent successfully!");

    form.reset();

});

