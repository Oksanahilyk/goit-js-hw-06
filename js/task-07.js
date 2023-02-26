const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener ("input" , resizeText);

function resizeText(event) {
	text.style.fontSize = event.currentTarget.value + "px";
}