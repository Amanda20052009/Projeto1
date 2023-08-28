const imageContainer = document.querySelector('.image-container');
const clickableImage = document.querySelector('.clickable-image');

imageContainer.addEventListener('click', () => {
    clickableImage.classList.toggle('fullscreen');
});
