const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const commentCount = slider.children.length;
let currentIndex = 0;

function showComment(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showComment(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < commentCount - 1) {
        currentIndex++;
        showComment(currentIndex);
    }
});

showComment(currentIndex);
