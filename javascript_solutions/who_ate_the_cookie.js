function cookie(x) {
	if (typeof x === 'string') {
		return 'Who ate the last cookie? It was Zach!';
	} else if (typeof x === 'number') {
		return 'Who ate the last cookie? It was Monica!';
	} else {
		return 'Who ate the last cookie? It was the dog!';
	}
}
