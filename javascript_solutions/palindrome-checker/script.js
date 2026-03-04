const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const isPalindrome = (str) => {
	const nonAlphaNumRegex = /[^0-9a-z]/gi;
	const strStripped = str.replace(nonAlphaNumRegex, '').toLowerCase();
	// console.log(`${strStripped} strStripped`);
	const reverseStr = strStripped.split('').reverse().join('');
	// console.log(`${reverseStr} reverseStr`);
	return strStripped === reverseStr;
};

checkBtn.addEventListener('click', () => {
	if (textInput.value === '') {
		alert('Please input a value');
	} else {
		if (isPalindrome(textInput.value)) {
			result.textContent = `${textInput.value} is a palindrome`;
		} else {
			result.textContent = `${textInput.value} is not a palindrome`;
		}
	}
});

// test strings

console.log('A is a palindrome');
console.log(isPalindrome('A'));
console.log('_eye is a palindrome');
console.log(isPalindrome('_eye'));
console.log('race car is a palindrome');
console.log(isPalindrome('race car'));
console.log('not a palindrome is not a palindrome');
console.log(isPalindrome('not a palindrome'));
console.log('A man, a plan, a canal. Panama is a palindrome');
console.log(isPalindrome('A man, a plan, a canal. Panama'));
console.log('never odd or even is a palindrome');
console.log(isPalindrome('never odd or even'));
console.log('nope is not a palindrome');
console.log(isPalindrome('nope'));
console.log('almostomla is not a palindrome');
console.log(isPalindrome('almostomla'));
console.log('My age is 0, 0 si ega ym. is a palindrome');
