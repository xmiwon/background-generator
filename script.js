var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + " " + color2.value + ")";
    css.textContent = body.style.background + ";";
}
// we dont need the (), that would make the function run auto without clicking color1/2
color1.addEventListener("input", setGradient) 
color2.addEventListener("change", setGradient)
