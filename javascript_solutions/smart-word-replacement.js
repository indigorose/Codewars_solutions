function myReplace(str, word, rword) {
	// match the first word in the string
	let testString = str.match(word);
	// console.log(testString);
	// test word case
	// console.log(word[0]);
	let charCase = /[A-Z]/.test(word[0]);
	// console.log(charCase);
	let newRWord = charCase
		? rword.replace(rword[0], rword[0].toUpperCase())
		: rword.replace(rword[0], rword[0].toLowerCase());
	// console.log(`the replacement word is ${newRWord}`);
	return str.replace(word, newRWord);
}

console.log(myReplace('Let us go to the store', 'store', 'mall'));
console.log('should return Let us go to the mall. ');
console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'));
console.log('He is Sitting on the couch');
console.log(myReplace('I think we should look up there', 'up', 'Down'));
console.log('I think we should look down there');
console.log(myReplace('This has a spellngi error', 'spellngi', 'spelling'));
