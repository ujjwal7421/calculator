let result = document.getElementById("result");

function addCharacter(character) {
	result.value += character;
}

function clearResult() {
	result.value = "";
}

function deleteCharacter() {
	result.value = result.value.slice(0, -1);
}

function calculate() {
	try {
		result.value = eval(result.value);
	} catch (error) {
		result.value = "Error";
	}
}