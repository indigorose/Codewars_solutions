const drumPad = document.querySelectorAll('.drum-pad');
const keyMap = {
	Q: 'Heater-1',
	W: 'Heater-2',
	E: 'Heater-3',
	A: 'Heater-4',
	S: 'Clap',
	D: 'Open-HH',
	Z: "Kick-n'-Hat",
	X: 'Kick',
	C: 'Closed-HH',
};
const displayName = document.getElementById('display');
const soundClip = document.querySelectorAll('.clip');

function drumTrigger(key) {
	const upperKey = key.toUpperCase();
	const soundName = keyMap[upperKey];

	if (!soundName) return;

	const button = [...drumPad].find(
		(btn) => btn.innerText.trim() === upperKey,
	);

	if (button) {
		button.classList.add('active');
		setTimeout(() => button.classList.remove('active', 200));
	}
	const audioClip = document.getElementById(upperKey);
	if (!audioClip) return;

	audioClip.currentTime = 0;
	audioClip.play();
	console.log(`Triggered: ${upperKey} ${soundName}`);
	displayName.innerText = soundName;
}

// Keyboard Listener function
document.addEventListener('keydown', (e) => {
	if (e.repeat) return;
	drumTrigger(e.key);
});

// Click Listener function
drumPad.forEach((button) => {
	button.addEventListener('click', () => {
		drumTrigger(button.innerText.trim());
	});
});
