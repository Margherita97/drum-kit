const buttonSelector = document.querySelectorAll(".drum");

for (const element of buttonSelector) {
    element.addEventListener("click", function() {
        alert("I got clicked!");
    });
}

