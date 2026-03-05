const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');

const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

const getFlags = () => {
	if (caseInsensitiveFlag.checked) {
		return 'i';
	} else if (globalFlag.checked) {
		return 'g';
	} else {
		return 'ig';
	}
};
