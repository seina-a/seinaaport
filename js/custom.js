// JavaScript Document
var typed = new Typed('.element', {
               	strings: [ "Hello, It's me." ],
       	 	    typeSpeed:80,
        		backSpeed:80,
        		loop:true,
        		});
new WOW().init();

// Thêm lớp "scrolled" khi người dùng cuộn trang
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
      } else {
        $('.navbar').removeClass('scrolled');
      }
    });
 
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});