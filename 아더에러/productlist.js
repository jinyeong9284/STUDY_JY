$(function slide(){
  $('.list-lookbook1-wrapper:first-child').appendTo('.list-lookbook-wrapper');
  setTimeout(slide,3500);
});

$('.list-img2-black').on('click',()=>{
  $('.list-product-wrapper .list-img-wrapper .list-img2-blackimg').removeClass('brown');
  $('.list-product-wrapper .list-img-wrapper .list-img2-blackimg').removeClass('gray');
  $('.list-product-wrapper .list-img-wrapper .list-img2-blackimg').addClass('black');
});
$('.list-img2-gray').on('click',()=>{
  $('.list-product-wrapper .list-img-wrapper .list-img2-blackimg').removeClass('brown');
  $('.list-product-wrapper .list-img-wrapper .list-img2-blackimg').addClass('gray');
});
$('.list-img2-brown').on('click',()=>{
  $('.list-product-wrapper .list-img-wrapper .list-img2-blackimg').removeClass('black');
  $('.list-product-wrapper .list-img-wrapper .list-img2-blackimg').addClass('brown');
});
$('.list-img3-black').on('click',()=>{
  $('.list-product-wrapper .list-img-wrapper .list-img3-blackimg').removeClass('white');
  $('.list-product-wrapper .list-img-wrapper .list-img3-blackimg').removeClass('blue');
  $('.list-product-wrapper .list-img-wrapper .list-img3-blackimg').addClass('black');
});
$('.list-img3-blue').on('click',()=>{
  $('.list-product-wrapper .list-img-wrapper .list-img3-blackimg').removeClass('white');
  $('.list-product-wrapper .list-img-wrapper .list-img3-blackimg').addClass('blue');
});
$('.list-img3-white').on('click',()=>{
  $('.list-product-wrapper .list-img-wrapper .list-img3-blackimg').removeClass('black');
  $('.list-product-wrapper .list-img-wrapper .list-img3-blackimg').addClass('white');
});
$('.list-img6-blue').on('click',()=>{
  $('.list-product-wrapper .list-img-wrapper .list-img6-blueimg').removeClass('brown');
  $('.list-product-wrapper .list-img-wrapper .list-img6-blueimg').addClass('blue');
});
$('.list-img6-brown').on('click',()=>{
  $('.list-product-wrapper .list-img-wrapper .list-img6-blueimg').removeClass('blue');
  $('.list-product-wrapper .list-img-wrapper .list-img6-blueimg').addClass('brown');
});