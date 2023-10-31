const words = ['apple', 'lemon', 'banana', 'pineapple', 'orange'];
let wordPlace = document.querySelector(".word");
const elements = document.querySelectorAll('.word span');

let wordRandom = words[Math.floor(Math.random() * words.length)];

let madeWord = wordRandom.split("").map(item => `<span>${item}</span>`).join('');
wordPlace.innerHTML = madeWord;

let i = 0;
document.addEventListener("keydown", function(event) {
    if (event.key === wordRandom[i]) {
        elements[i].className = "c";
        i++
    } else if (event.key != wordRandom[i]) {
        elements[i].className = "w";
    }

});