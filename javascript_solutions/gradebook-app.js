function getAverage(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum / arr.length;
}

function getGrade(studentScore) {
	if (studentScore === 100) {
		return 'A+';
	} else if (90 <= studentScore) {
		return 'A';
	} else if (80 <= studentScore) {
		return 'B';
	} else if (70 <= studentScore) {
		return 'C';
	} else if (60 <= studentScore) {
		return 'D';
	} else {
		return 'F';
	}
}

function hasPassingGrade(score) {
	return getGrade(score) !== 'F';
}

function studentMsg(arr, score) {
	let average = getAverage(arr);
	let grade = getGrade(score);
	let passingGrade = hasPassingGrade(score);
	if (passingGrade) {
		return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
	} else {
		return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
	}
}
