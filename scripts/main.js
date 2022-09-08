// Catching DOM
const footerYear = document.getElementById('footerYear');
const skills = document.querySelectorAll('.skill');


// Constants
const skillsArr = Array.from(skills);
const descriptions = [
    'html5',
    'css3',
    'js',
    'reactjs',
    'php',
    'mysql',
    'nodejs',
    'postman',
    'c',
    'arduino',
    'debian',
]


// Onload
window.onload = () => {
    skills.forEach((skill) => {
        skill.addEventListener('click', function(){
            alert(descriptions[skillsArr.indexOf(skill)]);
        })
    })
}


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


function downloadCv(){
    let path = './static/assets/';

    window.open(path, '_blank');
}