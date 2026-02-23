const galleryItem = document.querySelectorAll('.gallery-item');
const lightBox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

function displayImage(event) {
	let fullImg = event.target.src.replace('-thumbnail', '');
	// console.log(fullImg);
	lightboxImage.src = fullImg;
	lightBox.style.display = 'flex';
}

galleryItem.forEach((item) => {
	item.addEventListener('click', displayImage);
});

closeBtn.addEventListener('click', () => {
	lightBox.style.display = 'none';
});

lightBox.addEventListener('click', () => {
	lightBox.style.display = 'none';
});
