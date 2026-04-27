const poll = new Map();

function addOption(option) {
	if (!option) {
		return 'Option cannot be empty.';
	}
	if (poll.has(option)) {
		return `Option "${option}" already exists.`;
	}
	const voters = new Set();
	poll.set(option, voters);
	return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
	const voters = poll.get(option);
	if (!poll.has(option)) {
		return `Option "${option}" does not exist.`;
	}
	if (poll.get(option).has(voterId)) {
		return `Voter ${voterId} has already voted for "${option}".`;
	}
	voters.add(voterId);
	return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
	let results = 'Poll Results:';
	poll.forEach((val, key) => {
		results += `\n${key}: ${val.size} votes`;
	});
	return results;
}

console.log(addOption('Turkey'));
console.log(addOption('Morocco'));
console.log(addOption('Spain'));
console.log(addOption(''));
console.log(vote('Turkey', '4'));
console.log(vote('Turkey', '3'));
console.log(vote('Morocco', '5'));
console.log(displayResults());
let counter = 2;
let interval = setInterval(() => {
	console.log(counter);
	if (counter-- >= 0) clearInterval(interval);
}, 1000);
