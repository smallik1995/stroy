$(document).ready(function() {
  var picSlider = $('div').is('.jobs-slider-item--mask');
  var videoSlider = $('div').is('.btn-play');
  console.log(picSlider, videoSlider);
  if (picSlider == true) {
    $('.jobs-slider-item--mask').lightGallery();
  }  if (videoSlider == true) {
    $(".btn-play").lightGallery();
  }
});

$(window).on('scroll',function(){
  var nav = $('nav');
  var scrollHeight = $(window).scrollTop();
  if(scrollHeight > 100){
    nav.addClass('active');
  } else{
    nav.removeClass('active');
  }
});

$('.questions-box-head').click(function () {
  $(this).next().toggle(600);
  $(this).toggleClass('active');
});

$('.review-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: "<img src='./img/prev-arrow.svg' class='prev' alt=''>",
  nextArrow: "<img src='./img/next-arrow.svg' class='next' alt=''>"
});

$('.price_banner-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow: "<img src='./img/prev-arrow.svg' class='prev' alt=''>",
  nextArrow: "<img src='./img/next-arrow.svg' class='next' alt=''>"
});

$('.jobs-slider-wrapper').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: "<img src='./img/prev-arrow.svg' class='prev' alt=''>",
  nextArrow: "<img src='./img/next-arrow.svg' class='next' alt=''>"
});

$(document).ready(function(){

  // Элемент select, который будет замещаться:
  var select = $('select.select_sity');
  var selectText = $('select.select_sity :selected').text();

  var selectBoxContainer = $('<div class="input-default"><div class="selectBox">'+selectText+'</div></div>');

  var dropDown = $('<ul class="dropDown"></ul');
  var selectBox = selectBoxContainer.find('.selectBox');

  // Цикл по оригинальному элементу select

  select.find('option').each(function(i){
    var option = $(this);
    var optionVal = $(this).val();

    if(option.data('skip')){
      return true;
    }

    // Создаем выпадающий пункт в соответствии

    var li = $('<li><span class="'+optionVal+'">'+ option.html() +'</span></li>');

    li.click(function(){
      $('.selectBox').text(option.text());

      dropDown.trigger('hide');

      // Когда происходит событие click, мы также отражаем
      // изменения в оригинальном элементе select:
      select.val(option.val());

      return false;
    });

    dropDown.append(li);
  });

  selectBoxContainer.append(dropDown.hide());
  select.hide().after(selectBoxContainer);

  // Привязываем пользовательские события show и hide к элементу dropDown:

  $('div.input-default').on('click', function() {
    var div = $(this);
    var menu = $(this).find('.dropDown li');
    var dropDown = $(this).find('.dropDown');

    function slideDownFunc() {
      div.addClass('expanded');
      dropDown.slideDown();
      if(dropDown.is(':animated')){
        return false;
      }
    }
    function slideUpFunc() {
      div.removeClass('expanded');
      dropDown.slideUp();

      if(dropDown.is(':animated')){
        return false;
      }
    }

    slideDownFunc();

    $(menu).click(function () {
      slideUpFunc();
    })

    $(document).click(function (e){
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        slideUpFunc();
      }
    });
  });
});

$('.open-form').click(function() {
  $('#modal-form').toggleClass('active');
  $('body').toggleClass('overflow-hidden');
  return false;
});

$('.close-btn-form').click(function() {
  $('#modal-form').toggleClass('active');
  $('body').toggleClass('overflow-hidden');
});

$('.open-requisites').click(function() {
  $('#modal-requisites').toggleClass('active');
  $('body').toggleClass('overflow-hidden');
  return false;
});

$('.close-btn-requisites').click(function() {
  $('#modal-requisites').toggleClass('active');
  $('body').toggleClass('overflow-hidden');
});

$('.modal-wrapper').click(function (e){
  var guts = $('.modal-guts');
  var modalForm = $('#modal-form').hasClass('active');
  var modalAccept = $('#modal-accept').hasClass('active');

  if (!guts.is(e.target) && guts.has(e.target).length === 0) {
    if (modalForm == true) {
      $('#modal-form').toggleClass('active');
      $('body').toggleClass('overflow-hidden');
    }
    if ( modalAccept == true) {
      $('#modal-accept').toggleClass('active');
      $('body').toggleClass('overflow-hidden');
    }
  }
});

$('.open-accept').click(function() {
  var modalForm = $('#modal-form').hasClass('active');

  $('#modal-accept').toggleClass('active');
  $('body').toggleClass('overflow-hidden');
  return false;
  if (modalForm == true) {
    $('#modal-form').toggleClass('active');
    $('body').toggleClass('overflow-hidden');
  }
});

$('.close-accept').click(function() {
  $('#modal-accept').toggleClass('active');
  $('body').toggleClass('overflow-hidden');
});

$('.btn').on('click', function() {
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
  $('nav').toggle(300);
});
