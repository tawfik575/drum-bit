const buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        playSound(this.textContent);
    });
}

document.addEventListener("keydown", function (event) {
    playSound(event.key.toLowerCase());
});

function playSound(key) {
    let audio, activeKey = key;

    switch (activeKey) {
        case "w":
            audio = new Audio("../sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("../sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("../sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("../sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("../sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("../sounds/crash.mp3");
            break;
        case "l":
            audio = new Audio("../sounds/kick-bass.mp3");
            break;
        default:
            console.log(activeKey + " is not a valid key!");
            return;
    }
    audio.play();
    animateButton(activeKey);
}

function animateButton(key) {
    let activeKey = document.querySelector("." + key);

    activeKey.classList.add("pressed");
    setTimeout(function () {
        activeKey.classList.remove("pressed");
    }, 100);
}