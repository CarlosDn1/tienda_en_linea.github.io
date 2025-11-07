$(function(){
  'use strict';
  $(window).on('scroll',function(evt){
    $('nav').addClass('nav_fixed');

    var alturaBarra = $('nav').height();
    var menuDos = $('.menu_dos').height();
    var sumaMenuBarra = alturaBarra + menuDos - 18;
    $('body').css({'margin-top':sumaMenuBarra+'px'});

  });
  $('.burguer').on('click',function(evt){
    $('.menu_slider').addClass('abrir_menu');
    $('.fondo_transparente').addClass('activar_fondo');
  });

  $('.close').on('click',function(evt){
    $('.menu_slider').removeClass('abrir_menu');
    $('.fondo_transparente').removeClass('activar_fondo');
  });
  
  $('.fondo_transparente').on('click',function(evt){
    $('.menu_slider').removeClass('abrir_menu');
    $('.fondo_transparente').removeClass('activar_fondo');
  });
});
