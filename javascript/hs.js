'use strict';

let currSlide = 1;
showSlide(currSlide);

function btnClick(num) {
    showSlide((currSlide += num));
}

function showSlide(num) {
    const slides = document.querySelectorAll('.slide');
    if (num > slides.length) {
        currSlide = 1;
    }
    if (num < 1) {
        currSlide = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currSlide - 1].style.display = 'block';
}

const preBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.slider ul li');

preBtn.addEventListener('click', () => {
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].dataset.index == currSlide) {
            dots[i].classList.add('active');
        } else if (currSlide === 0) {
            dots[i].classList.remove('active');
            dots[2].classList.add('active');
        } else {
            dots[i].classList.remove('active');
        }
    }
});

nextBtn.addEventListener('click', () => {
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].dataset.index == currSlide) {
            dots[i].classList.add('active');
        } else if (currSlide === 3) {
            dots[i].classList.remove('active');
            dots[2].classList.add('active');
        } else {
            dots[i].classList.remove('active');
        }
    }
});

let interval = setInterval(() => {
    btnClick(1);
}, 2000);

const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', () => {
    clearInterval(interval);
});

slider.addEventListener('mouseout', () => {
    interval = setInterval(() => {
        btnClick(1);
    }, 2000);
});
