let password1 = document.getElementById('p1')
let password2 = document.getElementById('p2')
let passLength = document.getElementById("charinput")

var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;
var start_value = slider.getAttribute("value");
var x = start_value;
var color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '% , rgb(214, 214, 214)' + x + '%)';
slider.style.background = color;

passwordsButtonElements = document.getElementsByClassName("passwordbtn")

function getRandomPassword(plen){
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];
    pwd = "";
    for (let i =0; i<plen; i++){
        if (i===0){
            randomIndex = Math.floor(Math.random()*52); 
        }
        else{
            randomIndex = Math.floor(Math.random()*characters.length);
        }
        pwd += characters[randomIndex];
    }
    // console.log(pwd);
    return pwd
}

slider.oninput = function() {
  output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function() {
    x = slider.value;
    color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '% , rgb(214, 214, 214)' + x + '%)';
    slider.style.background = color;
});


$(document).ready(function () {
    $(".passwordbtn").click(function(event) {
        txt = event.target.textContent;
        navigator.clipboard.writeText(txt);
        alert(txt + " copied to clipboard");
    });
  });


function generatePassword(){

    let passwordLength = slider.value;
    let pass1 = getRandomPassword(passwordLength);
    let pass2 = getRandomPassword(passwordLength);
    password1.textContent = pass1;
    password2.textContent = pass2;

}