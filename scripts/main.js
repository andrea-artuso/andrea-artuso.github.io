const decimalNumber = document.getElementById('decimalNumber');
const lights = document.querySelectorAll(".bulb");
const switches = document.querySelectorAll(".plug");
const winMenu = document.getElementById('winMenu');


let rnd;
let bin = [];

window.onload = () => {
    generateNumber();
    console.log(bin);

    switches.forEach((swt) => {
        swt.addEventListener('click', () => {
            let id = swt.id.toString();
            let lightId = "bulb" + id[id.length - 1];

            document.getElementById(lightId).classList.toggle('on');

            if (checkCode() == true) {
                toggleMenu();
            }
        });
    });
}



function generateNumber(){
    rnd = Math.floor(Math.random() * 255);
    convertToBin(rnd);

    decimalNumber.innerText = rnd;
}

function checkCode(){
    for (let i=0; i < 8; i++){
        if (lights[i].classList.contains("on") != bin[i]) return false;
    }

    return true;
}

function convertToBin(n){
    let tempStr = n.toString(2);

    for (let i=0; i < (8 - tempStr.length); i++){
        bin[i] = 0;
    }

    bin = bin.toString().split(',').join('').concat(tempStr);
}

function toggleMenu(){
    winMenu.classList.toggle('hidden');
}