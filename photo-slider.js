/////////////////////// 1. section - SRAM - XX1 EAGLE AXS - RD-XX-1E-A1 ///////////////////////

var imageUrls = [
  'url("img/bike-parts/sram/mountain/xx1-eagle-axs/rd-xx-1e-a1/1.png")',
  'url("img/bike-parts/sram/mountain/xx1-eagle-axs/rd-xx-1e-a1/2.png")',
];

var imageNumber = imageUrls.length;

function imagePop(id) {
  document.getElementById('imagePopId').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName = document.getElementById(id + '-image').style.backgroundImage;

  console.log(imageName);
  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  document.getElementsByClassName('imageContain1')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain1')[0].style.backgroundImage =
    imageUrls[imageIndex];
}

function imageChange(id) {
  var imageName = document.getElementById(id).style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex >= imageNumber - 1) imageIndex = 0;
  else imageIndex++;

  document.getElementById(id).style.backgroundImage = imageUrls[imageIndex];
}

function imageMoveLeft() {
  var imageName =
    document.getElementById('imageContainId').style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex <= 0) imageIndex = imageNumber - 1;
  else imageIndex--;

  document.getElementById('imageContainId').style.backgroundImage =
    imageUrls[imageIndex];
}

function imageMoveRight() {
  var imageName =
    document.getElementById('imageContainId').style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex >= imageNumber - 1) imageIndex = 0;
  else imageIndex++;

  document.getElementById('imageContainId').style.backgroundImage =
    imageUrls[imageIndex];
}

function imagePopNone() {
  document.getElementsByClassName('imagePop1')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 2. section - SRAM - XX1 EAGLE AXS -  EC-AXS-ROCK-A1 ///////////////////////

var imageUrls2 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle-axs/ec-axs-rock-a1/1.png")',
  'url("img/bike-parts/sram/mountain/xx1-eagle-axs/ec-axs-rock-a1/2.png")',
  'url("img/bike-parts/sram/mountain/xx1-eagle-axs/ec-axs-rock-a1/3.png")',
];

var imageNumber2 = imageUrls2.length;

function imagePop2(id) {
  document.getElementById('imagePopId2').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName2 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex2 = 0;

  imageIndex2 = imageUrls2.indexOf(imageName2);

  document.getElementsByClassName('imageContain2')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain2')[0].style.backgroundImage =
    imageUrls2[imageIndex2];

  console.log(imageName2);
  console.log(imageIndex2);
}

function imageChange2(id) {
  var imageName2 = document.getElementById(id).style.backgroundImage;

  var imageIndex2 = 0;

  imageIndex2 = imageUrls2.indexOf(imageName2);

  if (imageIndex2 >= imageNumber2 - 1) imageIndex2 = 0;
  else imageIndex2++;

  document.getElementById(id).style.backgroundImage = imageUrls2[imageIndex2];
}

function imageMoveLeft2() {
  var imageName2 =
    document.getElementById('imageContainId2').style.backgroundImage;

  var imageIndex2 = 0;

  imageIndex2 = imageUrls2.indexOf(imageName2);

  if (imageIndex2 <= 0) imageIndex2 = imageNumber2 - 1;
  else imageIndex2--;

  document.getElementById('imageContainId2').style.backgroundImage =
    imageUrls2[imageIndex2];
}

function imageMoveRight2() {
  var imageName2 =
    document.getElementById('imageContainId2').style.backgroundImage;

  var imageIndex2 = 0;

  imageIndex2 = imageUrls2.indexOf(imageName2);

  if (imageIndex2 >= imageNumber2 - 1) imageIndex2 = 0;
  else imageIndex2++;

  document.getElementById('imageContainId2').style.backgroundImage =
    imageUrls2[imageIndex2];
}

function imagePopNone2() {
  document.getElementsByClassName('imagePop2')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 3. section - SRAM - XX1 EAGLE AXS -  PM-XX-1-B2 ///////////////////////

var imageUrls3 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle-axs/pm-xx-1-b2/1.png")',
];

var imageNumber3 = imageUrls3.length;

function imagePop3(id) {
  document.getElementById('imagePopId3').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName3 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex3 = 0;

  imageIndex3 = imageUrls3.indexOf(imageName3);

  document.getElementsByClassName('imageContain3')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain3')[0].style.backgroundImage =
    imageUrls3[imageIndex3];

  console.log(imageName3);
  console.log(imageIndex3);
}

function imageChange3(id) {
  var imageName3 = document.getElementById(id).style.backgroundImage;

  var imageIndex3 = 0;

  imageIndex3 = imageUrls3.indexOf(imageName3);

  if (imageIndex3 >= imageNumber3 - 1) imageIndex3 = 0;
  else imageIndex3++;

  document.getElementById(id).style.backgroundImage = imageUrls3[imageIndex3];
}

function imageMoveLeft3() {
  var imageName3 =
    document.getElementById('imageContainId3').style.backgroundImage;

  var imageIndex3 = 0;

  imageIndex3 = imageUrls3.indexOf(imageName3);

  if (imageIndex3 <= 0) imageIndex3 = imageNumber3 - 1;
  else imageIndex3--;

  document.getElementById('imageContainId3').style.backgroundImage =
    imageUrls3[imageIndex3];
}

function imageMoveRight3() {
  var imageName3 =
    document.getElementById('imageContainId3').style.backgroundImage;

  var imageIndex3 = 0;

  imageIndex3 = imageUrls3.indexOf(imageName3);

  if (imageIndex3 >= imageNumber3 - 1) imageIndex3 = 0;
  else imageIndex3++;

  document.getElementById('imageContainId3').style.backgroundImage =
    imageUrls3[imageIndex3];
}

function imagePopNone3() {
  document.getElementsByClassName('imagePop3')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 4. section - SRAM - XX1 EAGLE AXS - EC-AXS-SRAM-A1  ///////////////////////

var imageUrls4 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle-axs/ec-axs-sram-a1/1.png")',
];

var imageNumber4 = imageUrls4.length;

function imagePop4(id) {
  document.getElementById('imagePopId4').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName4 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex4 = 0;

  imageIndex4 = imageUrls4.indexOf(imageName4);

  document.getElementsByClassName('imageContain4')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain4')[0].style.backgroundImage =
    imageUrls4[imageIndex4];

  console.log(imageName4);
  console.log(imageIndex4);
}

function imageChange4(id) {
  var imageName4 = document.getElementById(id).style.backgroundImage;

  var imageIndex4 = 0;

  imageIndex4 = imageUrls4.indexOf(imageName4);

  if (imageIndex4 >= imageNumber4 - 1) imageIndex4 = 0;
  else imageIndex4++;

  document.getElementById(id).style.backgroundImage = imageUrls4[imageIndex4];
}

function imageMoveLeft4() {
  var imageName4 =
    document.getElementById('imageContainId4').style.backgroundImage;

  var imageIndex4 = 0;

  imageIndex4 = imageUrls4.indexOf(imageName4);

  if (imageIndex4 <= 0) imageIndex4 = imageNumber4 - 1;
  else imageIndex4--;

  document.getElementById('imageContainId4').style.backgroundImage =
    imageUrls4[imageIndex4];
}

function imageMoveRight4() {
  var imageName4 =
    document.getElementById('imageContainId4').style.backgroundImage;

  var imageIndex4 = 0;

  imageIndex4 = imageUrls4.indexOf(imageName4);

  if (imageIndex4 >= imageNumber4 - 1) imageIndex4 = 0;
  else imageIndex4++;

  document.getElementById('imageContainId4').style.backgroundImage =
    imageUrls4[imageIndex4];
}

function imagePopNone4() {
  document.getElementsByClassName('imagePop4')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 5. section - SRAM - XX1 EAGLE AXS - FC-XX-1-C2 ///////////////////////

var imageUrls5 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle-axs/fc-xx-1-c2/1.png")',
];

var imageNumber5 = imageUrls5.length;

function imagePop5(id) {
  document.getElementById('imagePopId5').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName5 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex5 = 0;

  imageIndex5 = imageUrls5.indexOf(imageName5);

  document.getElementsByClassName('imageContain5')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain5')[0].style.backgroundImage =
    imageUrls5[imageIndex5];

  console.log(imageName5);
  console.log(imageIndex5);
}

function imageChange5(id) {
  var imageName5 = document.getElementById(id).style.backgroundImage;

  var imageIndex5 = 0;

  imageIndex5 = imageUrls5.indexOf(imageName5);

  if (imageIndex5 >= imageNumber5 - 1) imageIndex5 = 0;
  else imageIndex5++;

  document.getElementById(id).style.backgroundImage = imageUrls5[imageIndex5];
}

function imageMoveLeft5() {
  var imageName5 =
    document.getElementById('imageContainId5').style.backgroundImage;

  var imageIndex5 = 0;

  imageIndex5 = imageUrls5.indexOf(imageName5);

  if (imageIndex5 <= 0) imageIndex5 = imageNumber5 - 1;
  else imageIndex5--;

  document.getElementById('imageContainId5').style.backgroundImage =
    imageUrls5[imageIndex5];
}

function imageMoveRight5() {
  var imageName5 =
    document.getElementById('imageContainId5').style.backgroundImage;

  var imageIndex5 = 0;

  imageIndex5 = imageUrls5.indexOf(imageName5);

  if (imageIndex5 >= imageNumber5 - 1) imageIndex5 = 0;
  else imageIndex5++;

  document.getElementById('imageContainId5').style.backgroundImage =
    imageUrls5[imageIndex5];
}

function imagePopNone5() {
  document.getElementsByClassName('imagePop5')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 6. section - SRAM - XX1 EAGLE AXS -  CS-XG-1299-A3 ///////////////////////

var imageUrls6 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle-axs/cs-xg-1299-a3/1.png")',
];

var imageNumber6 = imageUrls6.length;

function imagePop6(id) {
  document.getElementById('imagePopId6').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName6 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex6 = 0;

  imageIndex6 = imageUrls6.indexOf(imageName6);

  document.getElementsByClassName('imageContain6')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain6')[0].style.backgroundImage =
    imageUrls6[imageIndex6];

  console.log(imageName6);
  console.log(imageIndex6);
}

function imageChange6(id) {
  var imageName6 = document.getElementById(id).style.backgroundImage;

  var imageIndex6 = 0;

  imageIndex6 = imageUrls6.indexOf(imageName6);

  if (imageIndex6 >= imageNumber6 - 1) imageIndex6 = 0;
  else imageIndex6++;

  document.getElementById(id).style.backgroundImage = imageUrls6[imageIndex6];
}

function imageMoveLeft6() {
  var imageName6 =
    document.getElementById('imageContainId6').style.backgroundImage;

  var imageIndex6 = 0;

  imageIndex6 = imageUrls6.indexOf(imageName6);

  if (imageIndex6 <= 0) imageIndex6 = imageNumber6 - 1;
  else imageIndex6--;

  document.getElementById('imageContainId6').style.backgroundImage =
    imageUrls6[imageIndex6];
}

function imageMoveRight6() {
  var imageName6 =
    document.getElementById('imageContainId6').style.backgroundImage;

  var imageIndex6 = 0;

  imageIndex6 = imageUrls6.indexOf(imageName6);

  if (imageIndex6 >= imageNumber6 - 1) imageIndex6 = 0;
  else imageIndex6++;

  document.getElementById('imageContainId6').style.backgroundImage =
    imageUrls6[imageIndex6];
}

function imagePopNone6() {
  document.getElementsByClassName('imagePop6')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 7. section - SRAM - XX1 EAGLE AXS -  CS-XG-1299-A2 ///////////////////////

var imageUrls7 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle-axs/cs-xg-1299-a2/1.png")',
];

var imageNumber7 = imageUrls7.length;

function imagePop7(id) {
  document.getElementById('imagePopId7').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName7 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex7 = 0;

  imageIndex7 = imageUrls7.indexOf(imageName7);

  document.getElementsByClassName('imageContain7')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain7')[0].style.backgroundImage =
    imageUrls7[imageIndex7];

  console.log(imageName7);
  console.log(imageIndex7);
}

function imageChange7(id) {
  var imageName7 = document.getElementById(id).style.backgroundImage;

  var imageIndex7 = 0;

  imageIndex7 = imageUrls7.indexOf(imageName7);

  if (imageIndex7 >= imageNumber7 - 1) imageIndex7 = 0;
  else imageIndex7++;

  document.getElementById(id).style.backgroundImage = imageUrls7[imageIndex6];
}

function imageMoveLeft7() {
  var imageName7 =
    document.getElementById('imageContainId7').style.backgroundImage;

  var imageIndex7 = 0;

  imageIndex7 = imageUrls7.indexOf(imageName7);

  if (imageIndex7 <= 0) imageIndex7 = imageNumber7 - 1;
  else imageIndex7--;

  document.getElementById('imageContainId7').style.backgroundImage =
    imageUrls7[imageIndex7];
}

function imageMoveRight7() {
  var imageName7 =
    document.getElementById('imageContainId7').style.backgroundImage;

  var imageIndex7 = 0;

  imageIndex7 = imageUrls7.indexOf(imageName7);

  if (imageIndex7 >= imageNumber7 - 1) imageIndex7 = 0;
  else imageIndex7++;

  document.getElementById('imageContainId7').style.backgroundImage =
    imageUrls7[imageIndex7];
}

function imagePopNone7() {
  document.getElementsByClassName('imagePop7')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 8. section - SRAM - XX1 EAGLE AXS -  CN-EAGL-XX1-A2 ///////////////////////

var imageUrls8 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle-axs/cn-eagl-xx1-a2/1.png")',
];

var imageNumber8 = imageUrls8.length;

function imagePop8(id) {
  document.getElementById('imagePopId8').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName8 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex8 = 0;

  imageIndex8 = imageUrls8.indexOf(imageName8);

  document.getElementsByClassName('imageContain8')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain8')[0].style.backgroundImage =
    imageUrls8[imageIndex8];

  console.log(imageName8);
  console.log(imageIndex8);
}

function imageChange7(id) {
  var imageName7 = document.getElementById(id).style.backgroundImage;

  var imageIndex7 = 0;

  imageIndex7 = imageUrls7.indexOf(imageName7);

  if (imageIndex7 >= imageNumber7 - 1) imageIndex7 = 0;
  else imageIndex7++;

  document.getElementById(id).style.backgroundImage = imageUrls7[imageIndex6];
}

function imageMoveLeft7() {
  var imageName7 =
    document.getElementById('imageContainId7').style.backgroundImage;

  var imageIndex7 = 0;

  imageIndex7 = imageUrls7.indexOf(imageName7);

  if (imageIndex7 <= 0) imageIndex7 = imageNumber7 - 1;
  else imageIndex7--;

  document.getElementById('imageContainId7').style.backgroundImage =
    imageUrls7[imageIndex7];
}

function imageMoveRight7() {
  var imageName7 =
    document.getElementById('imageContainId7').style.backgroundImage;

  var imageIndex7 = 0;

  imageIndex7 = imageUrls7.indexOf(imageName7);

  if (imageIndex7 >= imageNumber7 - 1) imageIndex7 = 0;
  else imageIndex7++;

  document.getElementById('imageContainId7').style.backgroundImage =
    imageUrls7[imageIndex7];
}

function imagePopNone8() {
  document.getElementsByClassName('imagePop8')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 1. section - SRAM - XX1 EAGLE -  FC-XX-1-C1 ///////////////////////

var imageUrls9 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle/fc-xx-1-c1/1.png")',
  'url("img/bike-parts/sram/mountain/xx1-eagle/fc-xx-1-c1/2.png")',
];

var imageNumber9 = imageUrls9.length;

function imagePop9(id) {
  document.getElementById('imagePopId9').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName9 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex9 = 0;

  imageIndex9 = imageUrls9.indexOf(imageName9);

  document.getElementsByClassName('imageContain9')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain9')[0].style.backgroundImage =
    imageUrls9[imageIndex9];

  console.log(imageName9);
  console.log(imageIndex9);
}

function imageChange9(id) {
  var imageName9 = document.getElementById(id).style.backgroundImage;

  var imageIndex9 = 0;

  imageIndex9 = imageUrls9.indexOf(imageName9);

  if (imageIndex9 >= imageNumber9 - 1) imageIndex9 = 0;
  else imageIndex9++;

  document.getElementById(id).style.backgroundImage = imageUrls9[imageIndex9];
}

function imageMoveLeft9() {
  var imageName9 =
    document.getElementById('imageContainId9').style.backgroundImage;

  var imageIndex9 = 0;

  imageIndex9 = imageUrls9.indexOf(imageName9);

  if (imageIndex9 <= 0) imageIndex9 = imageNumber9 - 1;
  else imageIndex9--;

  document.getElementById('imageContainId9').style.backgroundImage =
    imageUrls9[imageIndex9];
}

function imageMoveRight9() {
  var imageName9 =
    document.getElementById('imageContainId9').style.backgroundImage;

  var imageIndex9 = 0;

  imageIndex9 = imageUrls9.indexOf(imageName9);

  if (imageIndex9 >= imageNumber9 - 1) imageIndex9 = 0;
  else imageIndex9++;

  document.getElementById('imageContainId9').style.backgroundImage =
    imageUrls9[imageIndex9];
}

function imagePopNone9() {
  document.getElementsByClassName('imagePop9')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 2. section - SRAM - XX1 EAGLE -  CS-XG-1299-B1 ///////////////////////

var imageUrls10 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle/cs-xg-1299-b1/1.png")',
  'url("img/bike-parts/sram/mountain/xx1-eagle/cs-xg-1299-b1/2.png")',
  'url("img/bike-parts/sram/mountain/xx1-eagle/cs-xg-1299-b1/3.png")',
];

var imageNumber10 = imageUrls10.length;

function imagePop10(id) {
  document.getElementById('imagePopId10').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName10 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  document.getElementsByClassName('imageContain10')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain10')[0].style.backgroundImage =
    imageUrls10[imageIndex10];

  console.log(imageName10);
  console.log(imageIndex10);
}

function imageChange10(id) {
  var imageName10 = document.getElementById(id).style.backgroundImage;

  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  if (imageIndex10 >= imageNumber10 - 1) imageIndex10 = 0;
  else imageIndex10++;

  document.getElementById(id).style.backgroundImage = imageUrls10[imageIndex10];
}

function imageMoveLeft10() {
  var imageName10 =
    document.getElementById('imageContainId10').style.backgroundImage;

  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  if (imageIndex10 <= 0) imageIndex10 = imageNumber10 - 1;
  else imageIndex10--;

  document.getElementById('imageContainId10').style.backgroundImage =
    imageUrls10[imageIndex10];
}

function imageMoveRight10() {
  var imageName10 =
    document.getElementById('imageContainId10').style.backgroundImage;

  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  if (imageIndex10 >= imageNumber10 - 1) imageIndex10 = 0;
  else imageIndex10++;

  document.getElementById('imageContainId10').style.backgroundImage =
    imageUrls10[imageIndex10];
}

function imagePopNone10() {
  document.getElementsByClassName('imagePop10')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 3. section - SRAM - XX1 EAGLE -  RD-XX-1-B2 ///////////////////////

var imageUrls11 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle/rd-xx-1-b2/1.png")',
];

var imageNumber11 = imageUrls11.length;

function imagePop11(id) {
  document.getElementById('imagePopId11').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName11 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex11 = 0;

  imageIndex11 = imageUrls11.indexOf(imageName11);

  document.getElementsByClassName('imageContain11')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain11')[0].style.backgroundImage =
    imageUrls11[imageIndex11];

  console.log(imageName11);
  console.log(imageIndex11);
}

function imageChange10(id) {
  var imageName11 = document.getElementById(id).style.backgroundImage;

  var imageIndex11 = 0;

  imageIndex11 = imageUrls11.indexOf(imageName11);

  if (imageIndex11 >= imageNumber11 - 1) imageIndex11 = 0;
  else imageIndex11++;

  document.getElementById(id).style.backgroundImage = imageUrls11[imageIndex11];
}

function imageMoveLeft10() {
  var imageName10 =
    document.getElementById('imageContainId10').style.backgroundImage;

  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  if (imageIndex10 <= 0) imageIndex10 = imageNumber10 - 1;
  else imageIndex10--;

  document.getElementById('imageContainId10').style.backgroundImage =
    imageUrls10[imageIndex10];
}

function imageMoveRight10() {
  var imageName10 =
    document.getElementById('imageContainId10').style.backgroundImage;

  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  if (imageIndex10 >= imageNumber10 - 1) imageIndex10 = 0;
  else imageIndex10++;

  document.getElementById('imageContainId10').style.backgroundImage =
    imageUrls10[imageIndex10];
}

function imagePopNone11() {
  document.getElementsByClassName('imagePop11')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 4. section - SRAM - XX1 EAGLE -  SL-XX-1PA-B2 ///////////////////////

var imageUrls12 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle/sl-xx-1pa-b2/1.png")',
];

var imageNumber12 = imageUrls12.length;

function imagePop12(id) {
  document.getElementById('imagePopId12').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName12 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex12 = 0;

  imageIndex12 = imageUrls12.indexOf(imageName12);

  document.getElementsByClassName('imageContain12')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain12')[0].style.backgroundImage =
    imageUrls12[imageIndex12];

  console.log(imageName12);
  console.log(imageIndex12);
}

function imageChange10(id) {
  var imageName11 = document.getElementById(id).style.backgroundImage;

  var imageIndex11 = 0;

  imageIndex11 = imageUrls11.indexOf(imageName11);

  if (imageIndex11 >= imageNumber11 - 1) imageIndex11 = 0;
  else imageIndex11++;

  document.getElementById(id).style.backgroundImage = imageUrls11[imageIndex11];
}

function imageMoveLeft10() {
  var imageName10 =
    document.getElementById('imageContainId10').style.backgroundImage;

  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  if (imageIndex10 <= 0) imageIndex10 = imageNumber10 - 1;
  else imageIndex10--;

  document.getElementById('imageContainId10').style.backgroundImage =
    imageUrls10[imageIndex10];
}

function imageMoveRight10() {
  var imageName10 =
    document.getElementById('imageContainId10').style.backgroundImage;

  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  if (imageIndex10 >= imageNumber10 - 1) imageIndex10 = 0;
  else imageIndex10++;

  document.getElementById('imageContainId10').style.backgroundImage =
    imageUrls10[imageIndex10];
}

function imagePopNone12() {
  document.getElementsByClassName('imagePop12')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 5. section - SRAM - XX1 EAGLE -  SL-XX-1-B2 ///////////////////////

var imageUrls13 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle/sl-xx-1-b2/1.png")',
];

var imageNumber13 = imageUrls13.length;

function imagePop13(id) {
  document.getElementById('imagePopId13').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName13 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex13 = 0;

  imageIndex13 = imageUrls13.indexOf(imageName13);

  document.getElementsByClassName('imageContain13')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain13')[0].style.backgroundImage =
    imageUrls13[imageIndex13];

  console.log(imageName13);
  console.log(imageIndex13);
}

function imageChange10(id) {
  var imageName11 = document.getElementById(id).style.backgroundImage;

  var imageIndex11 = 0;

  imageIndex11 = imageUrls11.indexOf(imageName11);

  if (imageIndex11 >= imageNumber11 - 1) imageIndex11 = 0;
  else imageIndex11++;

  document.getElementById(id).style.backgroundImage = imageUrls11[imageIndex11];
}

function imageMoveLeft10() {
  var imageName10 =
    document.getElementById('imageContainId10').style.backgroundImage;

  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  if (imageIndex10 <= 0) imageIndex10 = imageNumber10 - 1;
  else imageIndex10--;

  document.getElementById('imageContainId10').style.backgroundImage =
    imageUrls10[imageIndex10];
}

function imageMoveRight10() {
  var imageName10 =
    document.getElementById('imageContainId10').style.backgroundImage;

  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  if (imageIndex10 >= imageNumber10 - 1) imageIndex10 = 0;
  else imageIndex10++;

  document.getElementById('imageContainId10').style.backgroundImage =
    imageUrls10[imageIndex10];
}

function imagePopNone13() {
  document.getElementsByClassName('imagePop13')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 6. section - SRAM - XX1 EAGLE -  CN-EAGL-XX1-A3 ///////////////////////

var imageUrls14 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle/cn-eagl-xx1-a3/1.png")',
];

var imageNumber14 = imageUrls14.length;

function imagePop14(id) {
  document.getElementById('imagePopId14').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName14 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex14 = 0;

  imageIndex14 = imageUrls14.indexOf(imageName14);

  document.getElementsByClassName('imageContain14')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain14')[0].style.backgroundImage =
    imageUrls14[imageIndex14];

  console.log(imageName14);
  console.log(imageIndex14);
}

function imageChange10(id) {
  var imageName11 = document.getElementById(id).style.backgroundImage;

  var imageIndex11 = 0;

  imageIndex11 = imageUrls11.indexOf(imageName11);

  if (imageIndex11 >= imageNumber11 - 1) imageIndex11 = 0;
  else imageIndex11++;

  document.getElementById(id).style.backgroundImage = imageUrls11[imageIndex11];
}

function imageMoveLeft10() {
  var imageName10 =
    document.getElementById('imageContainId10').style.backgroundImage;

  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  if (imageIndex10 <= 0) imageIndex10 = imageNumber10 - 1;
  else imageIndex10--;

  document.getElementById('imageContainId10').style.backgroundImage =
    imageUrls10[imageIndex10];
}

function imageMoveRight10() {
  var imageName10 =
    document.getElementById('imageContainId10').style.backgroundImage;

  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  if (imageIndex10 >= imageNumber10 - 1) imageIndex10 = 0;
  else imageIndex10++;

  document.getElementById('imageContainId10').style.backgroundImage =
    imageUrls10[imageIndex10];
}

function imagePopNone14() {
  document.getElementsByClassName('imagePop14')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 7. section - SRAM - XX1 EAGLE -  CN-EAGL-XX1-A1 ///////////////////////

var imageUrls15 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle/cn-eagl-xx1-a1/1.png")',
];

var imageNumber15 = imageUrls15.length;

function imagePop15(id) {
  document.getElementById('imagePopId15').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName15 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex15 = 0;

  imageIndex15 = imageUrls15.indexOf(imageName15);

  document.getElementsByClassName('imageContain15')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain15')[0].style.backgroundImage =
    imageUrls15[imageIndex15];

  console.log(imageName15);
  console.log(imageIndex15);
}

function imageChange10(id) {
  var imageName11 = document.getElementById(id).style.backgroundImage;

  var imageIndex11 = 0;

  imageIndex11 = imageUrls11.indexOf(imageName11);

  if (imageIndex11 >= imageNumber11 - 1) imageIndex11 = 0;
  else imageIndex11++;

  document.getElementById(id).style.backgroundImage = imageUrls11[imageIndex11];
}

function imageMoveLeft10() {
  var imageName10 =
    document.getElementById('imageContainId10').style.backgroundImage;

  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  if (imageIndex10 <= 0) imageIndex10 = imageNumber10 - 1;
  else imageIndex10--;

  document.getElementById('imageContainId10').style.backgroundImage =
    imageUrls10[imageIndex10];
}

function imageMoveRight10() {
  var imageName10 =
    document.getElementById('imageContainId10').style.backgroundImage;

  var imageIndex10 = 0;

  imageIndex10 = imageUrls10.indexOf(imageName10);

  if (imageIndex10 >= imageNumber10 - 1) imageIndex10 = 0;
  else imageIndex10++;

  document.getElementById('imageContainId10').style.backgroundImage =
    imageUrls10[imageIndex10];
}

function imagePopNone15() {
  document.getElementsByClassName('imagePop15')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 8. section - SRAM - XX1 EAGLE -  TS-XX-1-B1 ///////////////////////

var imageUrls16 = [
  'url("img/bike-parts/sram/mountain/xx1-eagle/ts-xx-1-b1/1.png")',
  'url("img/bike-parts/sram/mountain/xx1-eagle/ts-xx-1-b1/2.png")',
];

var imageNumber16 = imageUrls16.length;

function imagePop16(id) {
  document.getElementById('imagePopId16').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName16 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex16 = 0;

  imageIndex16 = imageUrls16.indexOf(imageName16);

  document.getElementsByClassName('imageContain16')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain16')[0].style.backgroundImage =
    imageUrls16[imageIndex16];

  console.log(imageName16);
  console.log(imageIndex16);
}

function imageChange16(id) {
  var imageName16 = document.getElementById(id).style.backgroundImage;

  var imageIndex16 = 0;

  imageIndex16 = imageUrls16.indexOf(imageName16);

  if (imageIndex16 >= imageNumber16 - 1) imageIndex16 = 0;
  else imageIndex16++;

  document.getElementById(id).style.backgroundImage = imageUrls16[imageIndex16];
}

function imageMoveLeft16() {
  var imageName16 =
    document.getElementById('imageContainId16').style.backgroundImage;

  var imageIndex16 = 0;

  imageIndex16 = imageUrls16.indexOf(imageName16);

  if (imageIndex16 <= 0) imageIndex16 = imageNumber16 - 1;
  else imageIndex16--;

  document.getElementById('imageContainId16').style.backgroundImage =
    imageUrls16[imageIndex16];
}

function imageMoveRight16() {
  var imageName16 =
    document.getElementById('imageContainId16').style.backgroundImage;

  var imageIndex16 = 0;

  imageIndex16 = imageUrls16.indexOf(imageName16);

  if (imageIndex16 >= imageNumber16 - 1) imageIndex16 = 0;
  else imageIndex16++;

  document.getElementById('imageContainId16').style.backgroundImage =
    imageUrls16[imageIndex16];
}

function imagePopNone16() {
  document.getElementsByClassName('imagePop16')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 1. section - SRAM - XX1 -  RD-XX-1-A2 ///////////////////////

var imageUrls17 = [
  'url("img/bike-parts/sram/mountain/xx1/rd-xx-1-a2/1.png")',
  'url("img/bike-parts/sram/mountain/xx1/rd-xx-1-a2/2.png")',
];

var imageNumber17 = imageUrls17.length;

function imagePop17(id) {
  document.getElementById('imagePopId17').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName17 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex17 = 0;

  imageIndex17 = imageUrls17.indexOf(imageName17);

  document.getElementsByClassName('imageContain17')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain17')[0].style.backgroundImage =
    imageUrls17[imageIndex17];

  console.log(imageName17);
  console.log(imageIndex17);
}

function imageChange17(id) {
  var imageName17 = document.getElementById(id).style.backgroundImage;

  var imageIndex17 = 0;

  imageIndex17 = imageUrls17.indexOf(imageName17);

  if (imageIndex17 >= imageNumber17 - 1) imageIndex17 = 0;
  else imageIndex17++;

  document.getElementById(id).style.backgroundImage = imageUrls17[imageIndex17];
}

function imageMoveLeft17() {
  var imageName17 =
    document.getElementById('imageContainId17').style.backgroundImage;

  var imageIndex17 = 0;

  imageIndex17 = imageUrls17.indexOf(imageName17);

  if (imageIndex17 <= 0) imageIndex17 = imageNumber17 - 1;
  else imageIndex17--;

  document.getElementById('imageContainId17').style.backgroundImage =
    imageUrls17[imageIndex17];
}

function imageMoveRight17() {
  var imageName17 =
    document.getElementById('imageContainId17').style.backgroundImage;

  var imageIndex17 = 0;

  imageIndex17 = imageUrls17.indexOf(imageName17);

  if (imageIndex17 >= imageNumber17 - 1) imageIndex17 = 0;
  else imageIndex17++;

  document.getElementById('imageContainId17').style.backgroundImage =
    imageUrls17[imageIndex17];
}

function imagePopNone17() {
  document.getElementsByClassName('imagePop17')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 2. section - SRAM - XX1 -  CN-XX-1-A1 ///////////////////////

var imageUrls18 = ['url("img/bike-parts/sram/mountain/xx1/cn-xx-1-a1/1.png")'];

var imageNumber18 = imageUrls18.length;

function imagePop18(id) {
  document.getElementById('imagePopId18').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName18 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex18 = 0;

  imageIndex18 = imageUrls18.indexOf(imageName18);

  document.getElementsByClassName('imageContain18')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain18')[0].style.backgroundImage =
    imageUrls18[imageIndex18];
}

function imageChange17(id) {
  var imageName17 = document.getElementById(id).style.backgroundImage;

  var imageIndex17 = 0;

  imageIndex17 = imageUrls17.indexOf(imageName17);

  if (imageIndex17 >= imageNumber17 - 1) imageIndex17 = 0;
  else imageIndex17++;

  document.getElementById(id).style.backgroundImage = imageUrls17[imageIndex17];
}

function imageMoveLeft17() {
  var imageName17 =
    document.getElementById('imageContainId17').style.backgroundImage;

  var imageIndex17 = 0;

  imageIndex17 = imageUrls17.indexOf(imageName17);

  if (imageIndex17 <= 0) imageIndex17 = imageNumber17 - 1;
  else imageIndex17--;

  document.getElementById('imageContainId17').style.backgroundImage =
    imageUrls17[imageIndex17];
}

function imageMoveRight17() {
  var imageName17 =
    document.getElementById('imageContainId17').style.backgroundImage;

  var imageIndex17 = 0;

  imageIndex17 = imageUrls17.indexOf(imageName17);

  if (imageIndex17 >= imageNumber17 - 1) imageIndex17 = 0;
  else imageIndex17++;

  document.getElementById('imageContainId17').style.backgroundImage =
    imageUrls17[imageIndex17];
}

function imagePopNone18() {
  document.getElementsByClassName('imagePop18')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 3. section - SRAM - XX1 -  SL-XX-11-A1 ///////////////////////

var imageUrls20 = ['url("img/bike-parts/sram/mountain/xx1/sl-xx-11-a1/1.png")'];

var imageNumber20 = imageUrls20.length;

function imagePop20(id) {
  document.getElementById('imagePopId20').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName20 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex20 = 0;

  imageIndex20 = imageUrls20.indexOf(imageName20);

  document.getElementsByClassName('imageContain20')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain20')[0].style.backgroundImage =
    imageUrls20[imageIndex20];
}

function imageChange17(id) {
  var imageName17 = document.getElementById(id).style.backgroundImage;

  var imageIndex17 = 0;

  imageIndex17 = imageUrls17.indexOf(imageName17);

  if (imageIndex17 >= imageNumber17 - 1) imageIndex17 = 0;
  else imageIndex17++;

  document.getElementById(id).style.backgroundImage = imageUrls17[imageIndex17];
}

function imageMoveLeft17() {
  var imageName17 =
    document.getElementById('imageContainId17').style.backgroundImage;

  var imageIndex17 = 0;

  imageIndex17 = imageUrls17.indexOf(imageName17);

  if (imageIndex17 <= 0) imageIndex17 = imageNumber17 - 1;
  else imageIndex17--;

  document.getElementById('imageContainId17').style.backgroundImage =
    imageUrls17[imageIndex17];
}

function imageMoveRight17() {
  var imageName17 =
    document.getElementById('imageContainId17').style.backgroundImage;

  var imageIndex17 = 0;

  imageIndex17 = imageUrls17.indexOf(imageName17);

  if (imageIndex17 >= imageNumber17 - 1) imageIndex17 = 0;
  else imageIndex17++;

  document.getElementById('imageContainId17').style.backgroundImage =
    imageUrls17[imageIndex17];
}

function imagePopNone20() {
  document.getElementsByClassName('imagePop20')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 4. section - SRAM - XX1 -  CR-XSNC-DM-A1 ///////////////////////
var imageUrls21 = [
  'url("img/bike-parts/sram/mountain/xx1/cr-xsnc-dm-a1/1.png")',
  'url("img/bike-parts/sram/mountain/xx1/cr-xsnc-dm-a1/2.png")',
  'url("img/bike-parts/sram/mountain/xx1/cr-xsnc-dm-a1/3.png")',
  'url("img/bike-parts/sram/mountain/xx1/cr-xsnc-dm-a1/4.png")',
];
var imageNumber21 = imageUrls21.length;

function imagePop21(id) {
  document.getElementById('imagePopId21').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName21 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex21 = 0;

  imageIndex21 = imageUrls21.indexOf(imageName21);

  document.getElementsByClassName('imageContain21')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain21')[0].style.backgroundImage =
    imageUrls21[imageIndex21];
}

function imageChange21(id) {
  var imageName21 = document.getElementById(id).style.backgroundImage;

  var imageIndex21 = 0;

  imageIndex21 = imageUrls21.indexOf(imageName21);

  if (imageIndex21 >= imageNumber21 - 1) imageIndex21 = 0;
  else imageIndex21++;

  document.getElementById(id).style.backgroundImage = imageUrls21[imageIndex21];
}

function imageMoveLeft21() {
  var imageName21 =
    document.getElementById('imageContainId21').style.backgroundImage;

  var imageIndex21 = 0;

  imageIndex21 = imageUrls21.indexOf(imageName21);

  if (imageIndex21 <= 0) imageIndex21 = imageNumber21 - 1;
  else imageIndex21--;

  document.getElementById('imageContainId21').style.backgroundImage =
    imageUrls21[imageIndex21];
}

function imageMoveRight21() {
  var imageName21 =
    document.getElementById('imageContainId21').style.backgroundImage;

  var imageIndex21 = 0;

  imageIndex21 = imageUrls21.indexOf(imageName21);

  if (imageIndex21 >= imageNumber21 - 1) imageIndex21 = 0;
  else imageIndex21++;

  document.getElementById('imageContainId21').style.backgroundImage =
    imageUrls21[imageIndex21];
}

function imagePopNone21() {
  document.getElementsByClassName('imagePop21')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 5. section - SRAM - XX1 -  TS-XX-11-A1 ///////////////////////
var imageUrls22 = ['url("img/bike-parts/sram/mountain/xx1/ts-xx-11-a1/1.png")'];
var imageNumber22 = imageUrls22.length;

function imagePop22(id) {
  document.getElementById('imagePopId22').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName22 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex22 = 0;

  imageIndex22 = imageUrls22.indexOf(imageName22);

  document.getElementsByClassName('imageContain22')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain22')[0].style.backgroundImage =
    imageUrls22[imageIndex22];
}

function imageChange21(id) {
  var imageName21 = document.getElementById(id).style.backgroundImage;

  var imageIndex21 = 0;

  imageIndex21 = imageUrls21.indexOf(imageName21);

  if (imageIndex21 >= imageNumber21 - 1) imageIndex21 = 0;
  else imageIndex21++;

  document.getElementById(id).style.backgroundImage = imageUrls21[imageIndex21];
}

function imageMoveLeft21() {
  var imageName21 =
    document.getElementById('imageContainId21').style.backgroundImage;

  var imageIndex21 = 0;

  imageIndex21 = imageUrls21.indexOf(imageName21);

  if (imageIndex21 <= 0) imageIndex21 = imageNumber21 - 1;
  else imageIndex21--;

  document.getElementById('imageContainId21').style.backgroundImage =
    imageUrls21[imageIndex21];
}

function imageMoveRight21() {
  var imageName21 =
    document.getElementById('imageContainId21').style.backgroundImage;

  var imageIndex21 = 0;

  imageIndex21 = imageUrls21.indexOf(imageName21);

  if (imageIndex21 >= imageNumber21 - 1) imageIndex21 = 0;
  else imageIndex21++;

  document.getElementById('imageContainId21').style.backgroundImage =
    imageUrls21[imageIndex21];
}

function imagePopNone22() {
  document.getElementsByClassName('imagePop22')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 6. section - SRAM - XX1 -  CS-XG-1199-A1 ///////////////////////
var imageUrls23 = [
  'url("img/bike-parts/sram/mountain/xx1/cs-xg-1199-a1/1.png")',
];
var imageNumber23 = imageUrls23.length;

function imagePop23(id) {
  document.getElementById('imagePopId23').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName23 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex23 = 0;

  imageIndex23 = imageUrls23.indexOf(imageName23);

  document.getElementsByClassName('imageContain23')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain23')[0].style.backgroundImage =
    imageUrls23[imageIndex23];
}

function imageChange21(id) {
  var imageName21 = document.getElementById(id).style.backgroundImage;

  var imageIndex21 = 0;

  imageIndex21 = imageUrls21.indexOf(imageName21);

  if (imageIndex21 >= imageNumber21 - 1) imageIndex21 = 0;
  else imageIndex21++;

  document.getElementById(id).style.backgroundImage = imageUrls21[imageIndex21];
}

function imageMoveLeft21() {
  var imageName21 =
    document.getElementById('imageContainId21').style.backgroundImage;

  var imageIndex21 = 0;

  imageIndex21 = imageUrls21.indexOf(imageName21);

  if (imageIndex21 <= 0) imageIndex21 = imageNumber21 - 1;
  else imageIndex21--;

  document.getElementById('imageContainId21').style.backgroundImage =
    imageUrls21[imageIndex21];
}

function imageMoveRight21() {
  var imageName21 =
    document.getElementById('imageContainId21').style.backgroundImage;

  var imageIndex21 = 0;

  imageIndex21 = imageUrls21.indexOf(imageName21);

  if (imageIndex21 >= imageNumber21 - 1) imageIndex21 = 0;
  else imageIndex21++;

  document.getElementById('imageContainId21').style.backgroundImage =
    imageUrls21[imageIndex21];
}

function imagePopNone23() {
  document.getElementsByClassName('imagePop23')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 1. section - SRAM - X01-EAGLE-AXS - RD-X0-1E-A1 ///////////////////////
var imageUrls24 = [
  'url("img/bike-parts/sram/mountain/x01-eagle-axs/rd-x0-1e-a1/1.png")',
  'url("img/bike-parts/sram/mountain/x01-eagle-axs/rd-x0-1e-a1/2.png")',
];
var imageNumber24 = imageUrls24.length;

function imagePop24(id) {
  document.getElementById('imagePopId24').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName24 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex24 = 0;

  imageIndex24 = imageUrls24.indexOf(imageName24);

  document.getElementsByClassName('imageContain24')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain24')[0].style.backgroundImage =
    imageUrls24[imageIndex24];
}

function imageChange24(id) {
  var imageName24 = document.getElementById(id).style.backgroundImage;

  var imageIndex24 = 0;

  imageIndex24 = imageUrls24.indexOf(imageName24);

  if (imageIndex24 >= imageNumber24 - 1) imageIndex24 = 0;
  else imageIndex24++;

  document.getElementById(id).style.backgroundImage = imageUrls24[imageIndex24];
}

function imageMoveLeft24() {
  var imageName24 =
    document.getElementById('imageContainId24').style.backgroundImage;

  var imageIndex24 = 0;

  imageIndex24 = imageUrls24.indexOf(imageName24);

  if (imageIndex24 <= 0) imageIndex24 = imageNumber24 - 1;
  else imageIndex24--;

  document.getElementById('imageContainId24').style.backgroundImage =
    imageUrls24[imageIndex24];
}

function imageMoveRight24() {
  var imageName24 =
    document.getElementById('imageContainId24').style.backgroundImage;

  var imageIndex24 = 0;

  imageIndex24 = imageUrls24.indexOf(imageName24);

  if (imageIndex24 >= imageNumber24 - 1) imageIndex24 = 0;
  else imageIndex24++;

  document.getElementById('imageContainId24').style.backgroundImage =
    imageUrls24[imageIndex24];
}

function imagePopNone24() {
  document.getElementsByClassName('imagePop24')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 2. section - SRAM - X01-EAGLE-AXS - EC-AXS-ROCK-A1 ///////////////////////
var imageUrls25 = [
  'url("img/bike-parts/sram/mountain/x01-eagle-axs/ec-axs-rock-a1/1.png")',
  'url("img/bike-parts/sram/mountain/x01-eagle-axs/ec-axs-rock-a1/2.png")',
  'url("img/bike-parts/sram/mountain/x01-eagle-axs/ec-axs-rock-a1/3.png")',
];
var imageNumber25 = imageUrls25.length;

function imagePop25(id) {
  document.getElementById('imagePopId25').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName25 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex25 = 0;

  imageIndex25 = imageUrls25.indexOf(imageName25);

  document.getElementsByClassName('imageContain25')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain25')[0].style.backgroundImage =
    imageUrls25[imageIndex25];
}

function imageChange25(id) {
  var imageName25 = document.getElementById(id).style.backgroundImage;

  var imageIndex25 = 0;

  imageIndex25 = imageUrls25.indexOf(imageName25);

  if (imageIndex25 >= imageNumber25 - 1) imageIndex25 = 0;
  else imageIndex25++;

  document.getElementById(id).style.backgroundImage = imageUrls25[imageIndex25];
}

function imageMoveLeft25() {
  var imageName25 =
    document.getElementById('imageContainId25').style.backgroundImage;

  var imageIndex25 = 0;

  imageIndex25 = imageUrls25.indexOf(imageName25);

  if (imageIndex25 <= 0) imageIndex25 = imageNumber25 - 1;
  else imageIndex25--;

  document.getElementById('imageContainId25').style.backgroundImage =
    imageUrls25[imageIndex25];
}

function imageMoveRight25() {
  var imageName25 =
    document.getElementById('imageContainId25').style.backgroundImage;

  var imageIndex25 = 0;

  imageIndex25 = imageUrls25.indexOf(imageName25);

  if (imageIndex25 >= imageNumber25 - 1) imageIndex25 = 0;
  else imageIndex25++;

  document.getElementById('imageContainId25').style.backgroundImage =
    imageUrls25[imageIndex25];
}

function imagePopNone25() {
  document.getElementsByClassName('imagePop25')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 3. section - SRAM - X01-EAGLE-AXS - EC-AXS-SRAM-A1 ///////////////////////
var imageUrls26 = [
  'url("img/bike-parts/sram/mountain/x01-eagle-axs/ec-axs-sram-a1/1.png")',
];
var imageNumber26 = imageUrls26.length;

function imagePop26(id) {
  document.getElementById('imagePopId26').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName26 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex26 = 0;

  imageIndex26 = imageUrls26.indexOf(imageName26);

  document.getElementsByClassName('imageContain26')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain26')[0].style.backgroundImage =
    imageUrls26[imageIndex26];
}

function imageChange25(id) {
  var imageName25 = document.getElementById(id).style.backgroundImage;

  var imageIndex25 = 0;

  imageIndex25 = imageUrls25.indexOf(imageName25);

  if (imageIndex25 >= imageNumber25 - 1) imageIndex25 = 0;
  else imageIndex25++;

  document.getElementById(id).style.backgroundImage = imageUrls25[imageIndex25];
}

function imageMoveLeft25() {
  var imageName25 =
    document.getElementById('imageContainId25').style.backgroundImage;

  var imageIndex25 = 0;

  imageIndex25 = imageUrls25.indexOf(imageName25);

  if (imageIndex25 <= 0) imageIndex25 = imageNumber25 - 1;
  else imageIndex25--;

  document.getElementById('imageContainId25').style.backgroundImage =
    imageUrls25[imageIndex25];
}

function imageMoveRight25() {
  var imageName25 =
    document.getElementById('imageContainId25').style.backgroundImage;

  var imageIndex25 = 0;

  imageIndex25 = imageUrls25.indexOf(imageName25);

  if (imageIndex25 >= imageNumber25 - 1) imageIndex25 = 0;
  else imageIndex25++;

  document.getElementById('imageContainId25').style.backgroundImage =
    imageUrls25[imageIndex25];
}

function imagePopNone26() {
  document.getElementsByClassName('imagePop26')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 4. section - SRAM - X01-EAGLE-AXS - FC-X0-1-C3 ///////////////////////
var imageUrls27 = [
  'url("img/bike-parts/sram/mountain/x01-eagle-axs/fc-x0-1-c3/1.png")',
  'url("img/bike-parts/sram/mountain/x01-eagle-axs/fc-x0-1-c3/2.png")',
];
var imageNumber27 = imageUrls27.length;

function imagePop27(id) {
  document.getElementById('imagePopId27').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName27 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex27 = 0;

  imageIndex27 = imageUrls27.indexOf(imageName27);

  document.getElementsByClassName('imageContain27')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain27')[0].style.backgroundImage =
    imageUrls27[imageIndex27];
}

function imageChange27(id) {
  var imageName27 = document.getElementById(id).style.backgroundImage;

  var imageIndex27 = 0;

  imageIndex27 = imageUrls27.indexOf(imageName27);

  if (imageIndex27 >= imageNumber27 - 1) imageIndex27 = 0;
  else imageIndex27++;

  document.getElementById(id).style.backgroundImage = imageUrls27[imageIndex27];
}

function imageMoveLeft27() {
  var imageName27 =
    document.getElementById('imageContainId27').style.backgroundImage;

  var imageIndex27 = 0;

  imageIndex27 = imageUrls27.indexOf(imageName27);

  if (imageIndex27 <= 0) imageIndex27 = imageNumber27 - 1;
  else imageIndex27--;

  document.getElementById('imageContainId27').style.backgroundImage =
    imageUrls27[imageIndex27];
}

function imageMoveRight27() {
  var imageName27 =
    document.getElementById('imageContainId27').style.backgroundImage;

  var imageIndex27 = 0;

  imageIndex27 = imageUrls27.indexOf(imageName27);

  if (imageIndex27 >= imageNumber27 - 1) imageIndex27 = 0;
  else imageIndex27++;

  document.getElementById('imageContainId27').style.backgroundImage =
    imageUrls27[imageIndex27];
}

function imagePopNone27() {
  document.getElementsByClassName('imagePop27')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 5. section - SRAM - X01-EAGLE-AXS - CS-XG-1295-B1 ///////////////////////
var imageUrls28 = [
  'url("img/bike-parts/sram/mountain/x01-eagle-axs/cs-xg-1295-b1/1.png")',
];
var imageNumber28 = imageUrls28.length;

function imagePop28(id) {
  document.getElementById('imagePopId28').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName28 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex28 = 0;

  imageIndex28 = imageUrls28.indexOf(imageName28);

  document.getElementsByClassName('imageContain28')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain28')[0].style.backgroundImage =
    imageUrls28[imageIndex28];
}

function imageChange27(id) {
  var imageName27 = document.getElementById(id).style.backgroundImage;

  var imageIndex27 = 0;

  imageIndex27 = imageUrls27.indexOf(imageName27);

  if (imageIndex27 >= imageNumber27 - 1) imageIndex27 = 0;
  else imageIndex27++;

  document.getElementById(id).style.backgroundImage = imageUrls27[imageIndex27];
}

function imageMoveLeft27() {
  var imageName27 =
    document.getElementById('imageContainId27').style.backgroundImage;

  var imageIndex27 = 0;

  imageIndex27 = imageUrls27.indexOf(imageName27);

  if (imageIndex27 <= 0) imageIndex27 = imageNumber27 - 1;
  else imageIndex27--;

  document.getElementById('imageContainId27').style.backgroundImage =
    imageUrls27[imageIndex27];
}

function imageMoveRight27() {
  var imageName27 =
    document.getElementById('imageContainId27').style.backgroundImage;

  var imageIndex27 = 0;

  imageIndex27 = imageUrls27.indexOf(imageName27);

  if (imageIndex27 >= imageNumber27 - 1) imageIndex27 = 0;
  else imageIndex27++;

  document.getElementById('imageContainId27').style.backgroundImage =
    imageUrls27[imageIndex27];
}

function imagePopNone28() {
  document.getElementsByClassName('imagePop28')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 6. section - SRAM - X01-EAGLE-AXS - CS-XG-1295-A3 ///////////////////////
var imageUrls29 = [
  'url("img/bike-parts/sram/mountain/x01-eagle-axs/cs-xg-1295-a3/1.png")',
];
var imageNumber29 = imageUrls29.length;

function imagePop29(id) {
  document.getElementById('imagePopId29').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName29 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex29 = 0;

  imageIndex29 = imageUrls29.indexOf(imageName29);

  document.getElementsByClassName('imageContain29')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain29')[0].style.backgroundImage =
    imageUrls29[imageIndex29];
}

function imageChange27(id) {
  var imageName27 = document.getElementById(id).style.backgroundImage;

  var imageIndex27 = 0;

  imageIndex27 = imageUrls27.indexOf(imageName27);

  if (imageIndex27 >= imageNumber27 - 1) imageIndex27 = 0;
  else imageIndex27++;

  document.getElementById(id).style.backgroundImage = imageUrls27[imageIndex27];
}

function imageMoveLeft27() {
  var imageName27 =
    document.getElementById('imageContainId27').style.backgroundImage;

  var imageIndex27 = 0;

  imageIndex27 = imageUrls27.indexOf(imageName27);

  if (imageIndex27 <= 0) imageIndex27 = imageNumber27 - 1;
  else imageIndex27--;

  document.getElementById('imageContainId27').style.backgroundImage =
    imageUrls27[imageIndex27];
}

function imageMoveRight27() {
  var imageName27 =
    document.getElementById('imageContainId27').style.backgroundImage;

  var imageIndex27 = 0;

  imageIndex27 = imageUrls27.indexOf(imageName27);

  if (imageIndex27 >= imageNumber27 - 1) imageIndex27 = 0;
  else imageIndex27++;

  document.getElementById('imageContainId27').style.backgroundImage =
    imageUrls27[imageIndex27];
}

function imagePopNone29() {
  document.getElementsByClassName('imagePop29')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 7. section - SRAM - X01-EAGLE-AXS - CS-XG-1295-A2 ///////////////////////
var imageUrls30 = [
  'url("img/bike-parts/sram/mountain/x01-eagle-axs/cs-xg-1295-a2/1.png")',
];
var imageNumber30 = imageUrls30.length;

function imagePop30(id) {
  document.getElementById('imagePopId30').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName30 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex30 = 0;

  imageIndex30 = imageUrls30.indexOf(imageName30);

  document.getElementsByClassName('imageContain30')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain30')[0].style.backgroundImage =
    imageUrls30[imageIndex30];
}

function imageChange30(id) {
  var imageName30 = document.getElementById(id).style.backgroundImage;

  var imageIndex30 = 0;

  imageIndex30 = imageUrls30.indexOf(imageName30);

  if (imageIndex30 >= imageNumber30 - 1) imageIndex30 = 0;
  else imageIndex30++;

  document.getElementById(id).style.backgroundImage = imageUrls30[imageIndex30];
}

function imageMoveLeft30() {
  var imageName30 =
    document.getElementById('imageContainId30').style.backgroundImage;

  var imageIndex30 = 0;

  imageIndex30 = imageUrls30.indexOf(imageName30);

  if (imageIndex30 <= 0) imageIndex30 = imageNumber30 - 1;
  else imageIndex30--;

  document.getElementById('imageContainId30').style.backgroundImage =
    imageUrls30[imageIndex30];
}

function imageMoveRight30() {
  var imageName30 =
    document.getElementById('imageContainId30').style.backgroundImage;

  var imageIndex30 = 0;

  imageIndex30 = imageUrls30.indexOf(imageName30);

  if (imageIndex30 >= imageNumber30 - 1) imageIndex30 = 0;
  else imageIndex27++;

  document.getElementById('imageContainId30').style.backgroundImage =
    imageUrls30[imageIndex30];
}

function imagePopNone30() {
  document.getElementsByClassName('imagePop30')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 8. section - SRAM - X01-EAGLE-AXS - CN-EAGL-X01-A1 ///////////////////////
var imageUrls31 = [
  'url("img/bike-parts/sram/mountain/x01-eagle-axs/cn-eagl-x01-a1/1.png")',
];
var imageNumber31 = imageUrls31.length;

function imagePop31(id) {
  document.getElementById('imagePopId31').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName31 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex31 = 0;

  imageIndex31 = imageUrls31.indexOf(imageName31);

  document.getElementsByClassName('imageContain31')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain31')[0].style.backgroundImage =
    imageUrls31[imageIndex31];
}

function imageChange30(id) {
  var imageName30 = document.getElementById(id).style.backgroundImage;

  var imageIndex30 = 0;

  imageIndex30 = imageUrls30.indexOf(imageName30);

  if (imageIndex30 >= imageNumber30 - 1) imageIndex30 = 0;
  else imageIndex30++;

  document.getElementById(id).style.backgroundImage = imageUrls30[imageIndex30];
}

function imageMoveLeft30() {
  var imageName30 =
    document.getElementById('imageContainId30').style.backgroundImage;

  var imageIndex30 = 0;

  imageIndex30 = imageUrls30.indexOf(imageName30);

  if (imageIndex30 <= 0) imageIndex30 = imageNumber30 - 1;
  else imageIndex30--;

  document.getElementById('imageContainId30').style.backgroundImage =
    imageUrls30[imageIndex30];
}

function imageMoveRight30() {
  var imageName30 =
    document.getElementById('imageContainId30').style.backgroundImage;

  var imageIndex30 = 0;

  imageIndex30 = imageUrls30.indexOf(imageName30);

  if (imageIndex30 >= imageNumber30 - 1) imageIndex30 = 0;
  else imageIndex27++;

  document.getElementById('imageContainId30').style.backgroundImage =
    imageUrls30[imageIndex30];
}

function imagePopNone31() {
  document.getElementsByClassName('imagePop31')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 1. section - SRAM - X01-EAGLE - RD-X0-1-B2 ///////////////////////
var imageUrls32 = [
  'url("img/bike-parts/sram/mountain/x01-eagle/rd-x0-1-b2/1.png")',
  'url("img/bike-parts/sram/mountain/x01-eagle/rd-x0-1-b2/2.png")',
];
var imageNumber32 = imageUrls32.length;

function imagePop32(id) {
  document.getElementById('imagePopId32').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName32 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex32 = 0;

  imageIndex32 = imageUrls32.indexOf(imageName32);

  document.getElementsByClassName('imageContain32')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain32')[0].style.backgroundImage =
    imageUrls32[imageIndex32];
}

function imageChange32(id) {
  var imageName32 = document.getElementById(id).style.backgroundImage;

  var imageIndex32 = 0;

  imageIndex32 = imageUrls32.indexOf(imageName32);

  if (imageIndex32 >= imageNumber32 - 1) imageIndex32 = 0;
  else imageIndex32++;

  document.getElementById(id).style.backgroundImage = imageUrls32[imageIndex32];
}

function imageMoveLeft32() {
  var imageName32 =
    document.getElementById('imageContainId32').style.backgroundImage;

  var imageIndex32 = 0;

  imageIndex32 = imageUrls32.indexOf(imageName32);

  if (imageIndex32 <= 0) imageIndex32 = imageNumber32 - 1;
  else imageIndex32--;

  document.getElementById('imageContainId32').style.backgroundImage =
    imageUrls32[imageIndex32];
}

function imageMoveRight32() {
  var imageName32 =
    document.getElementById('imageContainId32').style.backgroundImage;

  var imageIndex32 = 0;

  imageIndex32 = imageUrls32.indexOf(imageName32);

  if (imageIndex32 >= imageNumber32 - 1) imageIndex32 = 0;
  else imageIndex32++;

  document.getElementById('imageContainId32').style.backgroundImage =
    imageUrls32[imageIndex32];
}

function imagePopNone32() {
  document.getElementsByClassName('imagePop32')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 2. section - SRAM - X01-EAGLE - SL-X01-PA-B2 ///////////////////////
var imageUrls33 = [
  'url("img/bike-parts/sram/mountain/x01-eagle/sl-x01-pa-b2/1.png")',
  'url("img/bike-parts/sram/mountain/x01-eagle/sl-x01-pa-b2/2.png")',
];
var imageNumber33 = imageUrls33.length;

function imagePop33(id) {
  document.getElementById('imagePopId33').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName33 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex33 = 0;

  imageIndex33 = imageUrls33.indexOf(imageName33);

  document.getElementsByClassName('imageContain33')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain33')[0].style.backgroundImage =
    imageUrls33[imageIndex33];
}

function imageChange33(id) {
  var imageName33 = document.getElementById(id).style.backgroundImage;

  var imageIndex33 = 0;

  imageIndex33 = imageUrls33.indexOf(imageName33);

  if (imageIndex33 >= imageNumber33 - 1) imageIndex33 = 0;
  else imageIndex33++;

  document.getElementById(id).style.backgroundImage = imageUrls33[imageIndex33];
}

function imageMoveLeft33() {
  var imageName33 =
    document.getElementById('imageContainId33').style.backgroundImage;

  var imageIndex33 = 0;

  imageIndex33 = imageUrls33.indexOf(imageName33);

  if (imageIndex33 <= 0) imageIndex33 = imageNumber33 - 1;
  else imageIndex33--;

  document.getElementById('imageContainId33').style.backgroundImage =
    imageUrls33[imageIndex33];
}

function imageMoveRight33() {
  var imageName33 =
    document.getElementById('imageContainId33').style.backgroundImage;

  var imageIndex33 = 0;

  imageIndex33 = imageUrls33.indexOf(imageName33);

  if (imageIndex33 >= imageNumber33 - 1) imageIndex33 = 0;
  else imageIndex33++;

  document.getElementById('imageContainId33').style.backgroundImage =
    imageUrls33[imageIndex33];
}

function imagePopNone33() {
  document.getElementsByClassName('imagePop33')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 3. section - SRAM - X01-EAGLE - SL-X0-1-B2 ///////////////////////
var imageUrls34 = [
  'url("img/bike-parts/sram/mountain/x01-eagle/sl-x0-1-b2/1.png")',
  'url("img/bike-parts/sram/mountain/x01-eagle/sl-x0-1-b2/2.png")',
];
var imageNumber34 = imageUrls34.length;

function imagePop34(id) {
  document.getElementById('imagePopId34').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName34 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex34 = 0;

  imageIndex34 = imageUrls34.indexOf(imageName34);

  document.getElementsByClassName('imageContain34')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain34')[0].style.backgroundImage =
    imageUrls34[imageIndex34];
}

function imageChange34(id) {
  var imageName34 = document.getElementById(id).style.backgroundImage;

  var imageIndex34 = 0;

  imageIndex34 = imageUrls34.indexOf(imageName34);

  if (imageIndex34 >= imageNumber34 - 1) imageIndex34 = 0;
  else imageIndex34++;

  document.getElementById(id).style.backgroundImage = imageUrls34[imageIndex34];
}

function imageMoveLeft34() {
  var imageName34 =
    document.getElementById('imageContainId34').style.backgroundImage;

  var imageIndex34 = 0;

  imageIndex34 = imageUrls34.indexOf(imageName34);

  if (imageIndex34 <= 0) imageIndex34 = imageNumber34 - 1;
  else imageIndex34--;

  document.getElementById('imageContainId34').style.backgroundImage =
    imageUrls34[imageIndex34];
}

function imageMoveRight34() {
  var imageName34 =
    document.getElementById('imageContainId34').style.backgroundImage;

  var imageIndex34 = 0;

  imageIndex34 = imageUrls34.indexOf(imageName34);

  if (imageIndex34 >= imageNumber34 - 1) imageIndex34 = 0;
  else imageIndex34++;

  document.getElementById('imageContainId34').style.backgroundImage =
    imageUrls34[imageIndex34];
}

function imagePopNone34() {
  document.getElementsByClassName('imagePop34')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 4. section - SRAM - X01-EAGLE - TS-X0-1-B1 ///////////////////////
var imageUrls35 = [
  'url("img/bike-parts/sram/mountain/x01-eagle/ts-x0-1-b1/1.png")',
  'url("img/bike-parts/sram/mountain/x01-eagle/ts-x0-1-b1/2.png")',
];
var imageNumber35 = imageUrls35.length;

function imagePop35(id) {
  document.getElementById('imagePopId35').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName35 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex35 = 0;

  imageIndex35 = imageUrls35.indexOf(imageName35);

  document.getElementsByClassName('imageContain35')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain35')[0].style.backgroundImage =
    imageUrls35[imageIndex35];
}

function imageChange35(id) {
  var imageName35 = document.getElementById(id).style.backgroundImage;

  var imageIndex35 = 0;

  imageIndex35 = imageUrls35.indexOf(imageName35);

  if (imageIndex35 >= imageNumber35 - 1) imageIndex35 = 0;
  else imageIndex35++;

  document.getElementById(id).style.backgroundImage = imageUrls35[imageIndex35];
}

function imageMoveLeft35() {
  var imageName35 =
    document.getElementById('imageContainId35').style.backgroundImage;

  var imageIndex35 = 0;

  imageIndex35 = imageUrls35.indexOf(imageName35);

  if (imageIndex35 <= 0) imageIndex35 = imageNumber35 - 1;
  else imageIndex35--;

  document.getElementById('imageContainId35').style.backgroundImage =
    imageUrls35[imageIndex35];
}

function imageMoveRight35() {
  var imageName35 =
    document.getElementById('imageContainId35').style.backgroundImage;

  var imageIndex35 = 0;

  imageIndex35 = imageUrls35.indexOf(imageName35);

  if (imageIndex35 >= imageNumber35 - 1) imageIndex35 = 0;
  else imageIndex35++;

  document.getElementById('imageContainId35').style.backgroundImage =
    imageUrls35[imageIndex35];
}

function imagePopNone35() {
  document.getElementsByClassName('imagePop35')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 5. section - SRAM - X01-EAGLE - FC-X0-1-C3 ///////////////////////
var imageUrls36 = [
  'url("img/bike-parts/sram/mountain/x01-eagle/fc-x0-1-c3/1.png")',
  'url("img/bike-parts/sram/mountain/x01-eagle/fc-x0-1-c3/2.png")',
];
var imageNumber36 = imageUrls36.length;

function imagePop36(id) {
  document.getElementById('imagePopId36').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName36 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex36 = 0;

  imageIndex36 = imageUrls36.indexOf(imageName36);

  document.getElementsByClassName('imageContain36')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain36')[0].style.backgroundImage =
    imageUrls36[imageIndex36];
}

function imageChange36(id) {
  var imageName36 = document.getElementById(id).style.backgroundImage;

  var imageIndex36 = 0;

  imageIndex36 = imageUrls36.indexOf(imageName36);

  if (imageIndex36 >= imageNumber36 - 1) imageIndex36 = 0;
  else imageIndex36++;

  document.getElementById(id).style.backgroundImage = imageUrls36[imageIndex36];
}

function imageMoveLeft36() {
  var imageName36 =
    document.getElementById('imageContainId36').style.backgroundImage;

  var imageIndex36 = 0;

  imageIndex36 = imageUrls36.indexOf(imageName36);

  if (imageIndex36 <= 0) imageIndex36 = imageNumber36 - 1;
  else imageIndex36--;

  document.getElementById('imageContainId36').style.backgroundImage =
    imageUrls36[imageIndex36];
}

function imageMoveRight36() {
  var imageName36 =
    document.getElementById('imageContainId36').style.backgroundImage;

  var imageIndex36 = 0;

  imageIndex36 = imageUrls36.indexOf(imageName36);

  if (imageIndex36 >= imageNumber36 - 1) imageIndex36 = 0;
  else imageIndex36++;

  document.getElementById('imageContainId36').style.backgroundImage =
    imageUrls36[imageIndex36];
}

function imagePopNone36() {
  document.getElementsByClassName('imagePop36')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 6. section - SRAM - X01-EAGLE - FC-X0-1-C1 ///////////////////////
var imageUrls37 = [
  'url("img/bike-parts/sram/mountain/x01-eagle/fc-x0-1-c1/1.png")',
  'url("img/bike-parts/sram/mountain/x01-eagle/fc-x0-1-c1/2.png")',
];
var imageNumber37 = imageUrls37.length;

function imagePop37(id) {
  document.getElementById('imagePopId37').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName37 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex37 = 0;

  imageIndex37 = imageUrls37.indexOf(imageName37);

  document.getElementsByClassName('imageContain37')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain37')[0].style.backgroundImage =
    imageUrls37[imageIndex37];
}

function imageChange37(id) {
  var imageName37 = document.getElementById(id).style.backgroundImage;

  var imageIndex37 = 0;

  imageIndex37 = imageUrls37.indexOf(imageName37);

  if (imageIndex37 >= imageNumber37 - 1) imageIndex37 = 0;
  else imageIndex37++;

  document.getElementById(id).style.backgroundImage = imageUrls37[imageIndex37];
}

function imageMoveLeft37() {
  var imageName37 =
    document.getElementById('imageContainId37').style.backgroundImage;

  var imageIndex37 = 0;

  imageIndex37 = imageUrls37.indexOf(imageName37);

  if (imageIndex37 <= 0) imageIndex37 = imageNumber37 - 1;
  else imageIndex37--;

  document.getElementById('imageContainId37').style.backgroundImage =
    imageUrls37[imageIndex37];
}

function imageMoveRight37() {
  var imageName37 =
    document.getElementById('imageContainId37').style.backgroundImage;

  var imageIndex37 = 0;

  imageIndex37 = imageUrls37.indexOf(imageName37);

  if (imageIndex37 >= imageNumber37 - 1) imageIndex37 = 0;
  else imageIndex37++;

  document.getElementById('imageContainId37').style.backgroundImage =
    imageUrls37[imageIndex37];
}

function imagePopNone37() {
  document.getElementsByClassName('imagePop37')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 7. section - SRAM - X01-EAGLE - CS-XG-1295-B1/2 ///////////////////////
var imageUrls38 = [
  'url("img/bike-parts/sram/mountain/x01-eagle/cs-xg-1295-b1/1.png")',
];
var imageNumber38 = imageUrls38.length;

function imagePop38(id) {
  document.getElementById('imagePopId38').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName38 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex38 = 0;

  imageIndex38 = imageUrls38.indexOf(imageName38);

  document.getElementsByClassName('imageContain38')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain38')[0].style.backgroundImage =
    imageUrls38[imageIndex38];
}

function imageChange38(id) {
  var imageName38 = document.getElementById(id).style.backgroundImage;

  var imageIndex38 = 0;

  imageIndex38 = imageUrls38.indexOf(imageName38);

  if (imageIndex38 >= imageNumber38 - 1) imageIndex38 = 0;
  else imageIndex38++;

  document.getElementById(id).style.backgroundImage = imageUrls38[imageIndex38];
}

function imageMoveLeft37() {
  var imageName37 =
    document.getElementById('imageContainId37').style.backgroundImage;

  var imageIndex37 = 0;

  imageIndex37 = imageUrls37.indexOf(imageName37);

  if (imageIndex37 <= 0) imageIndex37 = imageNumber37 - 1;
  else imageIndex37--;

  document.getElementById('imageContainId37').style.backgroundImage =
    imageUrls37[imageIndex37];
}

function imageMoveRight37() {
  var imageName37 =
    document.getElementById('imageContainId37').style.backgroundImage;

  var imageIndex37 = 0;

  imageIndex37 = imageUrls37.indexOf(imageName37);

  if (imageIndex37 >= imageNumber37 - 1) imageIndex37 = 0;
  else imageIndex37++;

  document.getElementById('imageContainId37').style.backgroundImage =
    imageUrls37[imageIndex37];
}

function imagePopNone38() {
  document.getElementsByClassName('imagePop38')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 8. section - SRAM - X01-EAGLE - CN-EAGL-X01-A1/2 ///////////////////////
var imageUrls39 = [
  'url("img/bike-parts/sram/mountain/x01-eagle/cn-eagl-x01-a1/1.png")',
];
var imageNumber39 = imageUrls39.length;

function imagePop39(id) {
  document.getElementById('imagePopId39').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName39 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex39 = 0;

  imageIndex39 = imageUrls39.indexOf(imageName39);

  document.getElementsByClassName('imageContain39')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain39')[0].style.backgroundImage =
    imageUrls39[imageIndex39];
}

function imageChange39(id) {
  var imageName39 = document.getElementById(id).style.backgroundImage;

  var imageIndex39 = 0;

  imageIndex39 = imageUrls39.indexOf(imageName39);

  if (imageIndex39 >= imageNumber39 - 1) imageIndex39 = 0;
  else imageIndex39++;

  document.getElementById(id).style.backgroundImage = imageUrls39[imageIndex39];
}

function imageMoveLeft37() {
  var imageName37 =
    document.getElementById('imageContainId37').style.backgroundImage;

  var imageIndex37 = 0;

  imageIndex37 = imageUrls37.indexOf(imageName37);

  if (imageIndex37 <= 0) imageIndex37 = imageNumber37 - 1;
  else imageIndex37--;

  document.getElementById('imageContainId37').style.backgroundImage =
    imageUrls37[imageIndex37];
}

function imageMoveRight37() {
  var imageName37 =
    document.getElementById('imageContainId37').style.backgroundImage;

  var imageIndex37 = 0;

  imageIndex37 = imageUrls37.indexOf(imageName37);

  if (imageIndex37 >= imageNumber37 - 1) imageIndex37 = 0;
  else imageIndex37++;

  document.getElementById('imageContainId37').style.backgroundImage =
    imageUrls37[imageIndex37];
}

function imagePopNone39() {
  document.getElementsByClassName('imagePop39')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 1. section - SHIMANO - BL-M9100 ///////////////////////
var imageUrls40 = [
  'url("img/bike-parts/shimano/mountain/xtr/bl-m9100/1.png")',
  'url("img/bike-parts/shimano/mountain/xtr/bl-m9100/2.png")',
];
var imageNumber40 = imageUrls40.length;

function imagePop40(id) {
  document.getElementById('imagePopId40').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName40 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex40 = 0;

  imageIndex40 = imageUrls40.indexOf(imageName40);

  document.getElementsByClassName('imageContain40')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain40')[0].style.backgroundImage =
    imageUrls40[imageIndex40];
}

function imageChange40(id) {
  var imageName40 = document.getElementById(id).style.backgroundImage;

  var imageIndex40 = 0;

  imageIndex40 = imageUrls40.indexOf(imageName40);

  if (imageIndex40 >= imageNumber40 - 1) imageIndex40 = 0;
  else imageIndex40++;

  document.getElementById(id).style.backgroundImage = imageUrls40[imageIndex40];
}

function imageMoveLeft40() {
  var imageName40 =
    document.getElementById('imageContainId40').style.backgroundImage;

  var imageIndex40 = 0;

  imageIndex40 = imageUrls40.indexOf(imageName40);

  if (imageIndex40 <= 0) imageIndex40 = imageNumber40 - 1;
  else imageIndex40--;

  document.getElementById('imageContainId40').style.backgroundImage =
    imageUrls40[imageIndex40];
}

function imageMoveRight40() {
  var imageName40 =
    document.getElementById('imageContainId40').style.backgroundImage;

  var imageIndex40 = 0;

  imageIndex40 = imageUrls40.indexOf(imageName40);

  if (imageIndex40 >= imageNumber40 - 1) imageIndex40 = 0;
  else imageIndex40++;

  document.getElementById('imageContainId40').style.backgroundImage =
    imageUrls40[imageIndex40];
}

function imagePopNone40() {
  document.getElementsByClassName('imagePop40')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 2. section - SHIMANO - BL-M9120 ///////////////////////
var imageUrls41 = [
  'url("img/bike-parts/shimano/mountain/xtr/bl-m9120/1.png")',
  'url("img/bike-parts/shimano/mountain/xtr/bl-m9120/2.png")',
];
var imageNumber41 = imageUrls41.length;

function imagePop41(id) {
  document.getElementById('imagePopId41').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName41 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  document.getElementsByClassName('imageContain41')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain41')[0].style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone41() {
  document.getElementsByClassName('imagePop41')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 3. section - SHIMANO - SL-M9100-R ///////////////////////
var imageUrls42 = [
  'url("img/bike-parts/shimano/mountain/xtr/sl-m9100-r/1.png")',
];
var imageNumber42 = imageUrls42.length;

function imagePop42(id) {
  document.getElementById('imagePopId42').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName42 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex42 = 0;

  imageIndex42 = imageUrls42.indexOf(imageName42);

  document.getElementsByClassName('imageContain42')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain42')[0].style.backgroundImage =
    imageUrls42[imageIndex42];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone42() {
  document.getElementsByClassName('imagePop42')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 4. section - SHIMANO - SL-M9100-IR ///////////////////////
var imageUrls43 = [
  'url("img/bike-parts/shimano/mountain/xtr/sl-m9100-ir/1.png")',
];
var imageNumber43 = imageUrls43.length;

function imagePop43(id) {
  document.getElementById('imagePopId43').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName43 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex43 = 0;

  imageIndex43 = imageUrls43.indexOf(imageName43);

  document.getElementsByClassName('imageContain43')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain43')[0].style.backgroundImage =
    imageUrls43[imageIndex43];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone43() {
  document.getElementsByClassName('imagePop43')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 5. section - SHIMANO - SL-M9100-L ///////////////////////
var imageUrls44 = [
  'url("img/bike-parts/shimano/mountain/xtr/sl-m9100-l/1.png")',
];
var imageNumber44 = imageUrls44.length;

function imagePop44(id) {
  document.getElementById('imagePopId44').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName44 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex44 = 0;

  imageIndex44 = imageUrls44.indexOf(imageName44);

  document.getElementsByClassName('imageContain44')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain44')[0].style.backgroundImage =
    imageUrls44[imageIndex44];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone44() {
  document.getElementsByClassName('imagePop44')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 1. section - ROCKSHOX - SID-SL - FS-SIDS-BSE-C1 ///////////////////////
var imageUrls45 = ['url("img/bike-parts/rockshox/SID-SL/FS-SIDS-BSE-C1.png")'];
var imageNumber45 = imageUrls45.length;

function imagePop45(id) {
  document.getElementById('imagePopId45').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName45 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex45 = 0;

  imageIndex45 = imageUrls45.indexOf(imageName45);

  document.getElementsByClassName('imageContain45')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain45')[0].style.backgroundImage =
    imageUrls45[imageIndex45];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone45() {
  document.getElementsByClassName('imagePop45')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 2. section - ROCKSHOX - SID-SL - FS-SIDS-SEL-C1 ///////////////////////
var imageUrls46 = ['url("img/bike-parts/rockshox/SID-SL/FS-SIDS-SEL-C1.png")'];
var imageNumber46 = imageUrls46.length;

function imagePop46(id) {
  document.getElementById('imagePopId46').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName46 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex46 = 0;

  imageIndex46 = imageUrls46.indexOf(imageName46);

  document.getElementsByClassName('imageContain46')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain46')[0].style.backgroundImage =
    imageUrls46[imageIndex46];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone46() {
  document.getElementsByClassName('imagePop46')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 3. section - ROCKSHOX - SID-SL - FS-SIDS-SELP-C1 ///////////////////////
var imageUrls47 = ['url("img/bike-parts/rockshox/SID-SL/FS-SIDS-SELP-C1.png")'];
var imageNumber47 = imageUrls47.length;

function imagePop47(id) {
  document.getElementById('imagePopId47').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName47 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex47 = 0;

  imageIndex47 = imageUrls47.indexOf(imageName47);

  document.getElementsByClassName('imageContain47')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain47')[0].style.backgroundImage =
    imageUrls47[imageIndex47];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone47() {
  document.getElementsByClassName('imagePop47')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 4. section - ROCKSHOX - SID-SL - FS-SIDS-ULT-C1 ///////////////////////
var imageUrls48 = ['url("img/bike-parts/rockshox/SID-SL/FS-SIDS-ULT-C1.png")'];
var imageNumber48 = imageUrls48.length;

function imagePop48(id) {
  document.getElementById('imagePopId48').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName48 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex48 = 0;

  imageIndex48 = imageUrls48.indexOf(imageName48);

  document.getElementsByClassName('imageContain48')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain48')[0].style.backgroundImage =
    imageUrls48[imageIndex48];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone48() {
  document.getElementsByClassName('imagePop48')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 1. section - ROCKSHOX - ZEB - FS-ZEB-BSE-A2 ///////////////////////
var imageUrls49 = ['url("img/bike-parts/rockshox/ZEB/FS-ZEB-BSE-A2.png")'];
var imageNumber49 = imageUrls49.length;

function imagePop49(id) {
  document.getElementById('imagePopId49').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName49 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex49 = 0;

  imageIndex49 = imageUrls49.indexOf(imageName49);

  document.getElementsByClassName('imageContain49')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain49')[0].style.backgroundImage =
    imageUrls49[imageIndex49];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone49() {
  document.getElementsByClassName('imagePop49')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 2. section - ROCKSHOX - ZEB - FS-ZEB-R-A1 ///////////////////////
var imageUrls50 = ['url("img/bike-parts/rockshox/ZEB/FS-ZEB-R-A1.png")'];
var imageNumber50 = imageUrls50.length;

function imagePop50(id) {
  document.getElementById('imagePopId50').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName50 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex50 = 0;

  imageIndex50 = imageUrls50.indexOf(imageName50);

  document.getElementsByClassName('imageContain50')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain50')[0].style.backgroundImage =
    imageUrls50[imageIndex50];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone50() {
  document.getElementsByClassName('imagePop50')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 3. section - ROCKSHOX - ZEB - FS-ZEB-SEL-A2 ///////////////////////
var imageUrls51 = ['url("img/bike-parts/rockshox/ZEB/FS-ZEB-SEL-A2.png")'];
var imageNumber51 = imageUrls51.length;

function imagePop51(id) {
  document.getElementById('imagePopId51').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName51 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex51 = 0;

  imageIndex51 = imageUrls51.indexOf(imageName51);

  document.getElementsByClassName('imageContain51')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain51')[0].style.backgroundImage =
    imageUrls51[imageIndex51];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone51() {
  document.getElementsByClassName('imagePop51')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 4. section - ROCKSHOX - ZEB - FS-ZEB-SELP-A1 ///////////////////////
var imageUrls52 = ['url("img/bike-parts/rockshox/ZEB/FS-ZEB-SELP-A1.png")'];
var imageNumber52 = imageUrls52.length;

function imagePop52(id) {
  document.getElementById('imagePopId52').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName52 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex52 = 0;

  imageIndex52 = imageUrls52.indexOf(imageName52);

  document.getElementsByClassName('imageContain52')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain52')[0].style.backgroundImage =
    imageUrls52[imageIndex52];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone52() {
  document.getElementsByClassName('imagePop52')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 5. section - ROCKSHOX - ZEB - FS-ZEB-SELP-A2 ///////////////////////
var imageUrls53 = ['url("img/bike-parts/rockshox/ZEB/FS-ZEB-SELP-A2.png")'];
var imageNumber53 = imageUrls53.length;

function imagePop53(id) {
  document.getElementById('imagePopId53').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName53 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex53 = 0;

  imageIndex53 = imageUrls53.indexOf(imageName53);

  document.getElementsByClassName('imageContain53')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain53')[0].style.backgroundImage =
    imageUrls53[imageIndex53];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone53() {
  document.getElementsByClassName('imagePop53')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 6. section - ROCKSHOX - ZEB - FS-ZEB-UFA-A2 ///////////////////////
var imageUrls54 = ['url("img/bike-parts/rockshox/ZEB/FS-ZEB-UFA-A2.png")'];
var imageNumber54 = imageUrls54.length;

function imagePop54(id) {
  document.getElementById('imagePopId54').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName54 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex54 = 0;

  imageIndex54 = imageUrls54.indexOf(imageName54);

  document.getElementsByClassName('imageContain54')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain54')[0].style.backgroundImage =
    imageUrls54[imageIndex54];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone54() {
  document.getElementsByClassName('imagePop54')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 7. section - ROCKSHOX - ZEB - FS-ZEB-ULT-A1 ///////////////////////
var imageUrls55 = ['url("img/bike-parts/rockshox/ZEB/FS-ZEB-ULT-A1.png")'];
var imageNumber55 = imageUrls55.length;

function imagePop55(id) {
  document.getElementById('imagePopId55').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName55 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex55 = 0;

  imageIndex55 = imageUrls55.indexOf(imageName55);

  document.getElementsByClassName('imageContain55')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain55')[0].style.backgroundImage =
    imageUrls55[imageIndex55];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone55() {
  document.getElementsByClassName('imagePop55')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
/////////////////////// 8. section - ROCKSHOX - ZEB - FS-ZEB-ULT-A2 ///////////////////////
var imageUrls56 = ['url("img/bike-parts/rockshox/ZEB/FS-ZEB-ULT-A2.png")'];
var imageNumber56 = imageUrls56.length;

function imagePop56(id) {
  document.getElementById('imagePopId56').style.display = 'block';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  var imageName56 = document.getElementById(id + '-img').style.backgroundImage;
  var imageIndex56 = 0;

  imageIndex56 = imageUrls56.indexOf(imageName56);

  document.getElementsByClassName('imageContain56')[0].style.animation =
    'he 800ms forwards';

  document.getElementsByClassName('imageContain56')[0].style.backgroundImage =
    imageUrls56[imageIndex56];
}

function imageChange41(id) {
  var imageName41 = document.getElementById(id).style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById(id).style.backgroundImage = imageUrls41[imageIndex41];
}

function imageMoveLeft41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 <= 0) imageIndex41 = imageNumber41 - 1;
  else imageIndex41--;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imageMoveRight41() {
  var imageName41 =
    document.getElementById('imageContainId41').style.backgroundImage;

  var imageIndex41 = 0;

  imageIndex41 = imageUrls41.indexOf(imageName41);

  if (imageIndex41 >= imageNumber41 - 1) imageIndex41 = 0;
  else imageIndex41++;

  document.getElementById('imageContainId41').style.backgroundImage =
    imageUrls41[imageIndex41];
}

function imagePopNone56() {
  document.getElementsByClassName('imagePop56')[0].style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}
