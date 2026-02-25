const themes = [
	{ name: 'red', message: 'Wait! Hold on! Wait a minute' },
	{ name: 'orange', message: "It's now or never" },
	{ name: 'green', message: 'Go! Go! Go!' },
];

const themeSwitch = document.getElementById('theme-switcher-button');
const themeDropdown = document.getElementById('theme-dropdown');
const themeMessage = document.getElementById('theme-message');
const body = document.getElementsByTagName('BODY')[0];
const themeRed = document.getElementById('theme-red');
const themeOrange = document.getElementById('theme-orange');
const themeGreen = document.getElementById('theme-green');

themeSwitch.addEventListener('click', () => {
	const dropdown = !themeDropdown.hidden;

	themeDropdown.hidden = dropdown;
	themeSwitch.setAttribute('aria-expanded', String(!dropdown));
});

themeRed.addEventListener('click', () => {
	const themeName = 'red';
	const selectedTheme = themes.find((t) => t.name === themeName);

	if (!selectedTheme) return;

	document.body.className = `theme-${selectedTheme.name}`;

	themeMessage.textContent = selectedTheme.message;

	themeSwitch.setAttribute('aria-expanded', 'false');
});

themeOrange.addEventListener('click', () => {
	const themeName = 'orange';
	const selectedTheme = themes.find((t) => t.name === themeName);

	if (!selectedTheme) return;

	document.body.className = `theme-${selectedTheme.name}`;

	themeMessage.textContent = selectedTheme.message;

	themeSwitch.setAttribute('aria-expanded', 'false');
});

themeGreen.addEventListener('click', () => {
	const themeName = 'green';
	const selectedTheme = themes.find((t) => t.name === themeName);

	if (!selectedTheme) return;

	document.body.className = `theme-${selectedTheme.name}`;

	themeMessage.textContent = selectedTheme.message;

	themeSwitch.setAttribute('aria-expanded', 'false');
});

// 	// themeDropdown.hasAttribute('hidden')
// 	// 	? themeDropdown.removeAttribute('hidden')
// 	// 	: themeDropdown.setAttribute('hidden', '');// document.addEventListener('click', (e) => {
// 	// Toggle button
// 	if (e.target.id === 'theme-switcher-button') {
// 		themeDropdown.hidden = !themeDropdown.hidden;
// 		themeSwitch.setAttribute(
// 			'aria-expanded',
// 			String(!themeDropdown.hidden),
// 		);
// 		return;
// 	}

// 	// Menu item clicked
// 	const item = e.target.closest('[role="menuitem"]');
// 	if (item) {
// 		const selectedTheme = themes.find(
// 			(theme) => item.id === `theme-${theme.name}`,
// 		);

// 		if (selectedTheme) {
// 			body.setAttribute('class', `theme-${selectedTheme.name}`);
// 			themeMessage.innerHTML = selectedTheme.message;
// 		}

// 		themeDropdown.hidden = true;
// 		themeSwitch.setAttribute('aria-expanded', 'false');
// 		body.removeAttribute('class');
// 	}
// });
