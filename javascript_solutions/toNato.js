function toNato(words) {
	let NATO = {
		A: 'Alpha',
		B: 'Bravo',
		C: 'Charlie',
		D: 'Delta',
		E: 'Echo',
		F: 'Foxtrot',
		G: 'Golf',
		H: 'Hotel',
		I: 'India',
		J: 'Juliett',
		K: 'Kilo',
		L: 'Lima',
		M: 'Mike',
		N: 'November',
		O: 'Oscar',
		P: 'Papa',
		Q: 'Quebec',
		R: 'Romeo',
		S: 'Sierra',
		T: 'Tango',
		U: 'Uniform',
		V: 'Victor',
		W: 'Whiskey',
		X: 'X-ray',
		Y: 'Yankee',
		Z: 'Zulu',
	};
	// you can access the preloaded NATO dictionary
	// NATO['A'] === 'Alfa', etc.
	let str = words.toUpperCase().split('');
	let punc = '!@£$%^&*.,;?';
	result = [];
	for (let i = 0; i < str.length; i++) {
		if (NATO.hasOwnProperty(str[i])) {
			result.push(NATO[str[i]]);
		} else if (punc.includes(str[i])) {
			result.push(str[i]);
			continue;
		} else {
			continue;
		}
	}
	return result.join(' ');
}

console.log(toNato('If you can read!'));
