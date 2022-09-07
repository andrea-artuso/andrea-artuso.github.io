// Catching DOM
const footerYear = document.getElementById('footerYear');


// Get current year
let year = new Date().getFullYear();


// add current year in footer
footerYear.innerText = year;

// Functions
function sendMail(){
    navigator.clipboard.writeText("andrea.artuso.business@gmail.com");

    if (confirm("The email address has been copied!\nDo you want to send an email directly?")){
        window.open("mailto:andrea.artuso.business@gmail.com", '_blank');
    }
}