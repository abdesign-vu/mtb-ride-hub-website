// Photo slider
// First Image slider

let index = 1;

const changeSlide1 = (e) => {
  showSlide((index = index + e));
};

const showSlide = (e) => {
  const images = document.querySelectorAll('.slider-items1 img');
  console.log(images);
  const indicators = document.querySelectorAll('.slider-indicators1 span');
  e > images.length ? (index = 1) : null;
  e < 1 ? (index = images.length) : null;

  for (let image of images) {
    image.style.opacity = '0';
  }
  for (let indicator of indicators) {
    indicator.style.width = '8px';
    indicator.style.background = '#fff';
  }

  images[index - 1].style.opacity = '1';
  indicators[index - 1].style.width = '26px';
  indicators[index - 1].style.background = '#fff';

  console.log(index);
};
