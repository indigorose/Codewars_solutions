function setAlarm(employed, vacation) {
	return employed == vacation || employed == false ? false : true;
}

// (employed, vacation) => employed && !vacation
