'use strict';

const mainImage = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();
  const currentElement = e.target.closest('a');

  if (currentElement) {
    mainImage.src = currentElement.href;
  }
})


