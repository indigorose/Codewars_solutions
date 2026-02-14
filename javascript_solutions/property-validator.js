function truthCheck(collection, pre) {
	let results = [];
	for (let i = 0; i < collection.length; i++) {
		results.push(collection[i][pre]);
	}
	console.log(results);
	let falsy = [false, 0, -0, '', null, undefined, NaN];
	const result = (results) => results.every((ele) => !falsy.includes(ele));
	return result(results);
}

console.log(
	truthCheck(
		[
			{ name: 'Quincy', role: 'Founder', isBot: false },
			{ name: 'Naomi', role: '', isBot: false },
			{ name: 'Camperbot', role: 'Bot', isBot: true },
		],
		'isBot',
	),
);
console.log(
	truthCheck(
		[
			{ name: 'Quincy', role: 'Founder', isBot: false },
			{ name: 'Naomi', role: '', isBot: false },
			{ name: 'Camperbot', role: 'Bot', isBot: true },
		],
		'name',
	),
);

console.log(
	truthCheck(
		[
			{ name: 'Quincy', role: 'Founder', isBot: false },
			{ name: 'Naomi', role: '', isBot: false },
			{ name: 'Camperbot', role: 'Bot', isBot: true },
		],
		'role',
	),
);

console.log(
	truthCheck(
		[
			{ name: 'Pikachu', number: 25, caught: 3 },
			{ name: 'Togepi', number: 175, caught: 1 },
		],
		'number',
	),
);

console.log(
	truthCheck(
		[
			{ name: 'Pikachu', number: 25, caught: 3 },
			{ name: 'Togepi', number: 175, caught: 1 },
			{ name: 'MissingNo', number: NaN, caught: 0 },
		],
		'caught',
	),
);

console.log(
	truthCheck(
		[
			{ name: 'Pikachu', number: 25, caught: 3 },
			{ name: 'Togepi', number: 175, caught: 1 },
			{ name: 'MissingNo', number: NaN, caught: 0 },
		],
		'number',
	),
);
