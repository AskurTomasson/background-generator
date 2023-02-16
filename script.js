var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var div1 = document.getElementById("container");
var button = document.getElementById("button");

var setGradient1 = function() {
  body.style.background = "linear-gradient(90deg, " 
  + color1.value 
  + ", " 
  + color2.value 
  + ")";
}

var setGradient2 = function() {
	div1.style.background = "linear-gradient(90deg, "
	+ color1.value
	+", "
	+ color2.value
	+")";

	css.textContent = body.style.background + ";";
}

function showGradient() {
	css.textContent = "linear-gradient(90deg, " + color1.value + ", " + color2.value + ")";
}

var randomColor = function() {
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var bgColor1 = "rgb(" + x + "," + y + "," + z +")";
	var bgColor2 = "rgb(" + y + "," + z + "," + x +")";
	body.style.background = "linear-gradient(90deg, "
	+ bgColor1
	+", "
	+ bgColor2
	+ ")";
	div1.style.background = "linear-gradient(90deg, "
	+ bgColor1
	+", "
	+ bgColor2
	+ ")";

	css.textContent = "linear-gradient(90deg, " + bgColor1 + ", " + bgColor2 + ")";
}

button.addEventListener("click", randomColor)
color1.addEventListener("input", setGradient1);
color1.addEventListener("input", setGradient2);
color2.addEventListener("input", setGradient1);
color2.addEventListener("input", setGradient2);
showGradient()