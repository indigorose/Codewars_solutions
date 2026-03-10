const regexPattern = /^([^aeiou]+)/i;
const charVow = 'way';
const charCon = 'ay';

function translatePigLatin(str) {
	let prefixChar = str.match(regexPattern);

	if (/^[aeiou]/i.test(str)) {
		return str + charVow;
	}

	if (!/[aeiou]/i.test(str)) {
		return str + charCon;
	}

	if (prefixChar) {
		return str.substring(prefixChar[1].length) + prefixChar[1] + charCon;
	}

	return str;
}

// console.log(
// 	'translatePigLatin("rhythm") should return the string aliforniacay',
// );
console.log(translatePigLatin('rhythm'));
console.log(translatePigLatin('california'));
console.log(translatePigLatin('paragraphs'));
console.log(translatePigLatin('algorithm'));
console.log(translatePigLatin('eight'));
console.log(translatePigLatin('schwartz'));
