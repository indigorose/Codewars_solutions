function getStatus(isBusy) {
	var msg = isBusy ? 'busy' : 'available';
	return {
		status: msg,
	};
}

// forfeited answer
