let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


function display(x){
    let res = document.getElementById("sum-el")
    res.textContent = x
}


function add(){
    let ans = num1 + num2;
    display(ans)
}
function sub(){
    let ans = num1 - num2;
    display(ans)
}
function divide(){
    let ans = num1 / num2;
    display(ans)
}
function prod(){
    let ans = num1 * num2;
    display(ans)
}

