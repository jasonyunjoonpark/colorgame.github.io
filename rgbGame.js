var numSquares = 6;
var colors = generateRandomArray(numSquares);

var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn"); 



easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomArray(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomArray(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
});

resetButton.addEventListener("click", function(){
	colors = generateRandomArray(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < colors.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = clickedColor;
			changeColors(clickedColor);
			resetButton.textContent = "Play Again"
		} else {
			this.style.backgroundColor = "steelblue";
			messageDisplay.textContent = "Try again.";
		}
	});
}

function changeColors(color){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomArray(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}











