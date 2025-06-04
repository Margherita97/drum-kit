const buttonSelector = document.querySelectorAll(".drum");

for (const element of buttonSelector) {
    element.addEventListener("click", function() {
        this.style.color = "white";
    });
}


// const audio = new Audio("sounds/tom-1.mp3");
//         audio.play();