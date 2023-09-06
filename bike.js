// First Image slider

let index = 1;

const changeSlide = (e) => {
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

showSlide();

// Second Image slider

let index2 = 1;

const changeSlide2 = (e2) => {
  showSlide2((index2 = index2 + e2));
};

const showSlide2 = (e2) => {
  const images2 = document.querySelectorAll('.slider-items2 img');
  console.log(images2);
  const indicators2 = document.querySelectorAll('.slider-indicators2 span');
  e2 > images2.length ? (index2 = 1) : null;
  e2 < 1 ? (index2 = images2.length) : null;

  for (let image2 of images2) {
    image2.style.opacity = '0';
  }
  for (let indicator2 of indicators2) {
    indicator2.style.width = '8px';
    indicator2.style.background = '#fff';
  }

  images2[index2 - 1].style.opacity = '1';
  indicators2[index2 - 1].style.width = '26px';
  indicators2[index2 - 1].style.background = '#fff';

  console.log(index2);
};

showSlide2();

// Third Image slider

let index3 = 1;

const changeSlide3 = (e3) => {
  showSlide3((index3 = index3 + e3));
};

const showSlide3 = (e3) => {
  const images3 = document.querySelectorAll('.slider-items3 img');
  console.log(images3);
  const indicators3 = document.querySelectorAll('.slider-indicators3 span');
  e3 > images3.length ? (index3 = 1) : null;
  e3 < 1 ? (index3 = images3.length) : null;

  for (let image3 of images3) {
    image3.style.opacity = '0';
  }
  for (let indicator3 of indicators3) {
    indicator3.style.width = '8px';
    indicator3.style.background = '#fff';
  }

  images3[index3 - 1].style.opacity = '1';
  indicators3[index3 - 1].style.width = '26px';
  indicators3[index3 - 1].style.background = '#fff';

  console.log(index3);
};

showSlide3();

// Fourth Image slider

let index4 = 1;

const changeSlide4 = (e4) => {
  showSlide4((index4 = index4 + e4));
};

const showSlide4 = (e4) => {
  const images4 = document.querySelectorAll('.slider-items4 img');
  console.log(images4);
  const indicators4 = document.querySelectorAll('.slider-indicators4 span');
  e4 > images4.length ? (index4 = 1) : null;
  e4 < 1 ? (index4 = images4.length) : null;

  for (let image4 of images4) {
    image4.style.opacity = '0';
  }
  for (let indicator4 of indicators4) {
    indicator4.style.width = '8px';
    indicator4.style.background = '#fff';
  }

  images4[index4 - 1].style.opacity = '1';
  indicators4[index4 - 1].style.width = '26px';
  indicators4[index4 - 1].style.background = '#fff';

  console.log(index4);
};

showSlide4();

// Fifth Image slider

let index5 = 1;

const changeSlide5 = (e5) => {
  showSlide5((index5 = index5 + e5));
};

const showSlide5 = (e5) => {
  const images5 = document.querySelectorAll('.slider-items5 img');
  console.log(images5);
  const indicators5 = document.querySelectorAll('.slider-indicators5 span');
  e5 > images5.length ? (index5 = 1) : null;
  e5 < 1 ? (index5 = images5.length) : null;

  for (let image5 of images5) {
    image5.style.opacity = '0';
  }
  for (let indicator5 of indicators5) {
    indicator5.style.width = '8px';
    indicator5.style.background = '#fff';
  }

  images5[index5 - 1].style.opacity = '1';
  indicators5[index5 - 1].style.width = '26px';
  indicators5[index5 - 1].style.background = '#fff';

  console.log(index5);
};

showSlide5();

// Sixth Image slider

let index6 = 1;

const changeSlide6 = (e6) => {
  showSlide6((index6 = index6 + e6));
};

const showSlide6 = (e6) => {
  const images6 = document.querySelectorAll('.slider-items6 img');
  console.log(images6);
  const indicators6 = document.querySelectorAll('.slider-indicators6 span');
  e6 > images6.length ? (index6 = 1) : null;
  e6 < 1 ? (index6 = images6.length) : null;

  for (let image6 of images6) {
    image6.style.opacity = '0';
  }
  for (let indicator6 of indicators6) {
    indicator6.style.width = '8px';
    indicator6.style.background = '#fff';
  }

  images6[index6 - 1].style.opacity = '1';
  indicators6[index6 - 1].style.width = '26px';
  indicators6[index6 - 1].style.background = '#fff';

  console.log(index6);
};

showSlide6();
