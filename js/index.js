var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");

    numberOfSquares = 3;
    colors.generateRandomColors(numberOfSquares);
    pickedColor = pickColor;
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = colors[i];

        squares[i].style.display = "block";


    }

});
hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    hardBtn.classList.add("selected");
    colors.generateRandomColors(numberOfSquares);
    pickedColor = pickColor;
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }

})

resetButton.addEventListener("click", function() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct"
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "steelblue";
            messageDisplay.textContent = "Try again"
        }

    });
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}