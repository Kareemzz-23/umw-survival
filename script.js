
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const cardWrapper = document.querySelector('.card-wrapper');

leftBtn.addEventListener('click', () => {
    cardWrapper.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

rightBtn.addEventListener('click', () => {
    cardWrapper.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});
