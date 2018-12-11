 var colors = generateRandomColors(6);
 var squares = document.querySelectorAll(".square");
 var pickedColor = pickColor();
 var colorDisplay = document.getElementById("colorDisplay")
 var messageDisplay = document.getElementById("message");
 var h1 = document.querySelector("h1");
 var resetButton = document.querySelector("#reset");
 resetButton.addEventListener("click", function() {
     colors = generateRandomColors(6);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     for (let i = 0; i < squares.length; i++) {
         squares[i].style.backgroundColor = colors[i];
     }
     h1.style.backgroundColor = "#232323";
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
             this.style.backgroundColor = "#232323";
             messageDisplay.textContent = "Try again"
         }

     });
 }

 function changeColors(color) {
     for (let i = 0; i < squares.length; i++) {
         squares[i].style.backgroundColor = color
     }
 }