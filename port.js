// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fixing the Menu Toggle Issue
let menuIcon = document.querySelector('#manu-icon');  // Fixed typo (was "nemuIcon")
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {  // Ensure elements exist before adding event listener
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };
} else {
    console.error("Menu icon or navbar not found!"); // Debugging log
}

// Read More Button Functionality
document.addEventListener("DOMContentLoaded", function () {
    var readMoreBtn = document.getElementById("read-more");
    var moreText = document.getElementById("more-text");

    if (readMoreBtn && moreText) {
        readMoreBtn.addEventListener("click", function () {
            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "block";
                readMoreBtn.innerText = "Read Less";
            } else {
                moreText.style.display = "none";
                readMoreBtn.innerText = "Read More";
            }
        });
        console.log("Read More button event added successfully!"); // Debugging log
    } else {
        console.error("Read More button or text not found!"); // Debugging log
    }
});


document.querySelector("#contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    let name = document.querySelector("input[name='name']").value;
    let email = document.querySelector("input[name='email']").value;
    let phone = document.querySelector("input[name='phone']").value;
    let subject = document.querySelector("input[name='subject']").value;
    let message = document.querySelector("textarea[name='message']").value;

    // Construct mailto link
    let mailtoLink = `mailto:aryandahiya678@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0A%0A${encodeURIComponent(message)}`;

    // Open email client
    window.location.href = mailtoLink;
});
