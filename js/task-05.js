const form = {
	input: document.querySelector("#name-input"),
	anonym: document.querySelector("#name-output"),
};

form.input.addEventListener(`input`, onInputChange);

function onInputChange(event) {
	form.anonym.textContent = event.currentTarget.value;
}