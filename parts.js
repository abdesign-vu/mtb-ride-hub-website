// slider home photos

let slideImg = document.getElementById('slideImg');
let images = [
  'img/mtb-random-img/mtb-1.jpg',
  'img/mtb-random-img/mtb-2.jpg',
  'img/mtb-random-img/mtb-3.jpg',
  'img/mtb-random-img/mtb-4.jpg',
];
let len = images.length;
let i = 0;
function slider() {
  if (i > len - i) {
    i = 0;
  }
  slideImg.src = images[i];
  i++;
  setTimeout('slider()', 4000);
}
