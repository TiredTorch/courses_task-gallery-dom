'use strict';

const pictures = [
  './src/images/spring.jpg',
  './src/images/summer.jpg',
  './src/images/authum.jpg',
  './src/images/winter.jpg'
]

const thumbs = document.querySelector('#thumbs');
const mainImage = document.querySelector('#largeImg');
const banners = document.getElementsByClassName('list-item__link');


thumbs.addEventListener('click', (e) => {
  e.preventDefault();
  const currentElement = e.target.closest('a');

  if (currentElement) {
    mainImage.src = pictures[[...banners].indexOf(currentElement)];
  }
})


