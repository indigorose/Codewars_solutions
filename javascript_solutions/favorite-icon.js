const favoriteIcon = document.querySelectorAll('.favorite-icon');

favoriteIcon.forEach((button) => {
	button.addEventListener('click', () => {
		button.classList.toggle('filled');
		if (button.classList.contains('filled')) {
			button.innerHTML = '&#10084;';
		} else {
			button.innerHTML = '&#9825;';
		}
	});
});
