const input = document.querySelector("#validation-input");

input.addEventListener('blur', validCountSymbol);

function validCountSymbol(event) {
	// console.log(event.currentTarget.value.length);
	if(event.currentTarget.value.length === Number(input.dataset.length)) {
		input.classList.add("valid");
		
	} else {
		input.classList.add("invalid");
	}
	
}