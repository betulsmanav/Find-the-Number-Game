let spanLow = document.getElementById("spanLow");
let spanHigh = document.getElementById("spanHigh");
let attempts = document.getElementById("spanAttempts");
let inputNumber = document.getElementById("input-number");
let button = document.getElementById("button");
let warning = document.querySelector(".warning");
let image = document.querySelector(".image")
console.log(image);

const randomNum = Math.round(Math.random() * 101);
console.log(randomNum);


button.addEventListener("click", clickFunc);

function clickFunc(event) {
    let number = inputNumber.value;
    if (number < 0 || number > 100) {
        warning.innerHTML = "lutfen 1-100 arasi bir sayi giriniz"
        attempts.innerHTML--;
        yenideneme()
    } else if (number == "") {
        warning.innerHTML = "lutfen bir sayi giriniz"
        attempts.innerHTML--;
        yenideneme()
        
        
    } else if (number < randomNum) {
        warning.innerHTML = "";
        spanLow.innerHTML = number;
        attempts.innerHTML--;
        yenideneme()
        
        
    } else if (number > randomNum) {
        warning.innerHTML = "";
        spanHigh.innerHTML = number;
        attempts.innerHTML--;
        yenideneme()

        
    }else if (number == randomNum) {
        warning.innerHTML = "kazandiniz."
        yenideneme()
        
        
    }

    if (attempts == 0) {
        image.style.backgroundImage = "url(./img/gameover.gif)";
       
    }
    event.preventDefault();
};

function yenideneme() {
    
    inputNumber.value = ""
};