const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');

const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

const getFlags = () => {
	let flags = '';
	if (caseInsensitiveFlag.checked) flags += 'i';
	if (globalFlag.checked) flags += 'g';
	return flags;
};

testButton.addEventListener('click', () => {
	const flags = getFlags();
	const pattern = regexPattern.value;
	const text = stringToTest.textContent || stringToTest.innerText;
	const regex = new RegExp(pattern, flags);
	const matches = text.match(regex);
	const highlighted = text.replace(regex, (match) => {
		return `<span class="highlight">${match}</span>`;
	});

	if (highlighted === text || !matches) {
		testResult.innerHTML = 'no match';
	} else {
		stringToTest.innerHTML = highlighted;
		testResult.innerHTML = matches.join(', ');
	}
});
