let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

function getRandomFighter(){
    return fighters[Math.floor(Math.random()*fighters.length)]
}



fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

    let p1 = getRandomFighter();
    let p2 = getRandomFighter();
    res = p1 + " vs " + p2
    console.log(res)
    stageEl.textContent = res


    //console.log("click")
})

