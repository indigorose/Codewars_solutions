const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');

const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

const getFlags = () => {
	if (caseInsensitiveFlag.checked && globalFlag.checked) {
		console.log('ig clicked');
		return 'ig';
	} else if (globalFlag.checked) {
		console.log('g clicked');
		return 'g';
	} else if (caseInsensitiveFlag.checked) {
		console.log('i clicked');
		return 'i';
	} else {
		console.log('empty sting');
		return '';
	}
};

testButton.addEventListener('click', () => {
	getFlags();
	const testRegex = regexPattern.value;
	console.log(stringToTest.innerHTML);
	console.log(testRegex);
});
