const API_URL = 'https://programming-quotes-api.herokuapp.com/quotes/random';
const TERMINAL_TEXT =  "\'name\': \'Andrea Artuso\',\n\'country\': \'Italy\',\n\'date-of-birth\': \'22-04-2005\',\n\'languages\': [\'italian\', \'english\'],\n\'programming-languages\': [\'C/C++\', \'C#\', \'JavaScript\', \'Python\'],\n\'other-technologies\': [\'HTML\', \'CSS\', \'Linux\'],\n\'contacts\': {\nㅤ\t\t\'email-address\': \'andrea.artuso.business@gmail.com\',\nㅤ\t\t\'linkedin\': \'linked.com/in/andrea-artuso\',\nㅤ\t\'github\': \'github.com/andrea-artuso\'\nㅤ\t\t}"
const WINDOW_HEIGHT = window.innerHeight;

// catching the DOM
const quote_content = document.getElementById('quote_content');
const quote_author = document.getElementById('quote_author');
const terminal_text = document.getElementById('terminal_text');
const landing = document.getElementById('landing');
const summaries_grid =  document.getElementById('summaries_grid');
const projects_grid = document.getElementById('projects_grid');

window.onload = () => {
    getRandomQuote();
    displayCode();

    if (summaries_grid.childElementCount == 0)
        summaries_grid.innerText = "No summaries available.";

    if (projects_grid.childElementCount == 0)
        projects_grid.innerText = "No projects available.";
}

// Get random quote function
function getRandomQuote(){
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        quote_content.innerHTML = `<span class='quotation'>“</span>${data.en}<span class='quotation'>”</span>`;
        quote_author.innerHTML = `~ ${data.author}`;
    })
}

// Display code
function displayCode(){
    let codes = TERMINAL_TEXT.split('\n');
    for (let i=0; i<codes.length; i++){
        (function(ind) {
            setTimeout(() => {
                terminal_text.innerHTML += `<div><span class="tilde">~</span> ${codes[i]} </div>`;
            }, (500 * ind));
        })(i);
    }
}

// blur landing on scroll
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let blur_perc = (25 * scrollY) / WINDOW_HEIGHT;

    if (blur_perc > 100) blur_perc = 100;
    landing.style.filter = "blur("+ blur_perc +"px)";

    console.log(blur_perc);
})