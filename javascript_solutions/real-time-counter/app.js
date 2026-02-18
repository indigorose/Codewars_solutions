const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

function getCharacterCount() {
	const length = textInput.value.length;
	let currCount = +charCount.textContent.split('/')[0];

	if ((length) => 50) {
		textInput.value = textInput.value.slice(0, 50);
	}
	currCount = length;
	charCount.style.color = length === 50 ? 'red' : 'black';
	return (charCount.textContent = `Character Count: ${currCount}/50`);
}

textInput.addEventListener('input', getCharacterCount);
