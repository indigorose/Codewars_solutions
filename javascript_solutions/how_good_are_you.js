function betterThanAverage(classPoints, yourPoints) {
	// Your code here

	let count = 0;
	for (let i = 0; i < classPoints.length; i++) {
		count += classPoints[i];
	}
	let averagePoints = count / classPoints.length;
	return averagePoints < yourPoints;
}
