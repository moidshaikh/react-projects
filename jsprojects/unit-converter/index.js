/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector("#inputUnit");
const convertBtn = document.querySelector("#convertBtn");
const results = document.querySelectorAll(".resultDiv");

// inputEl.value = 33;
const inputVal = inputEl.value;
console.log(inputVal);

// 20 meters = 65.616 feet | 20 feet = 6.096 meters

function roundThree(x){
    return Math.round(x * 1000) / 1000
}


function getLengthConversion(){
    return `${inputVal} meters = ${roundThree(inputVal*3.281)} feet | ${inputVal} feet = ${roundThree(inputVal/3.281)}} meters`;
}
function getVolumeConversion(){
        return `${inputVal} liters = ${roundThree(inputVal*0.264)} gallon | ${inputVal} gallon = ${roundThree(inputVal/0.264)}} liters`;
}
function getMassConversion(){
        return `${inputVal} kilogram = ${roundThree(inputVal*2.204)} pound | ${inputVal} pound = ${roundThree(inputVal/2.204)} kilogram`;
}

function convertedVal(i){
    if (i==0){
        // convert length
        return getLengthConversion();
    }
    else if(i==1){
        // convert volume
        return getVolumeConversion();
    }
    else{
        // convert mass
        return getMassConversion();
    }
}





convertBtn.addEventListener("click", function(){
    console.log("convert clicked");
    for ( let i=0; i<results.length; i++){
        results[i].lastElementChild.textContent = convertedVal(i);
    }
    

});