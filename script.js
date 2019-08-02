var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
//Pick the color for player to guess
var pickedColor = colorPicker();
//selects all the squares on the documents.
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var colorReset = document.querySelector("#newColorReset");
var modeButton = document.querySelectorAll(".mode");

//Starts the game.
init();

function init() {
    // loops through the mode selection buttons and add the event listeners.
    modeButtonSetup();

    //Adds event listener to the reset button.
    colorReset.addEventListener("click", function () {
        createGame();
    });

    createGame();
}

function modeButtonSetup() {
    for (i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function () {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            createGame();
        });
    }
}

// The main function to create start the game.
function createGame() {
    colors = generateRandomColors(numOfSquares);
    pickedColor = colorPicker();
    colorDisplay.textContent = pickedColor;
    colorSquares();
    colorReset.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}

// Colors the squares on the page.
function colorSquares() {
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            //add colors to the squares.
            squares[i].style.backgroundColor = colors[i];
            //add click listeners to the squares.
            squares[i].addEventListener("click", function () {
                //check if the clicked squares background is the same as the picked color.
                if (this.style.backgroundColor === pickedColor) {
                    messageDisplay.textContent = "Correct!";
                    changeColors(pickedColor);
                    h1.style.backgroundColor = pickedColor;
                    colorReset.textContent = "Play Again?";
                } else {
                    this.style.backgroundColor = "#232323";
                    messageDisplay.textContent = "Try Again!";
                }
            });
        } else {
            squares[i].style.display = "none";
        }
    }
}

// changes the color of the squares upon wining
function changeColors(color) {
    //Loop through all the squares
    for (var i = 0; i < squares.length; i++) {
        //change each square to given color.
        squares[i].style.backgroundColor = color;
    }
}

// picks a random color from the colors array.
function colorPicker() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

/**
* Generates random RGB colors and returns an array of the colors.
**/
function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add ranodm colors to the array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

// returns an rgb value for a random color.
function randomColor() {
    //Pick red between 0 - 255
    var red = Math.floor(Math.random() * 256);
    //Pick green between 0 - 255
    var green = Math.floor(Math.random() * 256);
    //Pick blue between 0 - 255
    var blue = Math.floor(Math.random() * 256);

    //return the random color.  
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}