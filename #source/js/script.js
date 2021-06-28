var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (isMobile.any()) { }
$('.wrapper').addClass('loaded');

var act = "click";
if (isMobile.iOS()) {
	var act = "touchstart";
}
new WOW().init();
//console.log('start...')
let iconMenu = document.querySelector(".menu-header__icon");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu-header__menu");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
		//console.log('click');
	});
}

$.each($('input.phone'), function(index, val) {
	$(this).attr('type','tel');
	$(this).focus(function(){
		$(this).inputmask('7(999) 999 99 99',{clearIncomplete: true,clearMaskOnLostFocus: true,
			"onincomplete": function(){maskclear($(this));}
		});
		$(this).addClass('focus');
		$(this).parent().addClass('focus');
		$(this).parent().removeClass('err');
		$(this).removeClass('err');
	});
});
$('input.phone').focusout(function(event) {
	maskclear($(this));
});
$.each($('input.num'), function(index, val) {
	$(this).focus(function(){
		$(this).inputmask('9{1,1000}',{clearIncomplete: true,placeholder:"",clearMaskOnLostFocus: true,"onincomplete": function(){maskclear($(this));}});
		$(this).addClass('focus');
		$(this).parent().addClass('focus');
		$(this).parent().removeClass('err');
		$(this).removeClass('err');
	});
});
$('input.num').focusout(function(event) {
	maskclear($(this));
});



//==================== SCROLL ======================
//===================Шапка==========================================
$('.menu-header__link').click(function (e) {
	event.preventDefault();
	let section = $(this).attr('data-scroll');
	$('html, body').animate({scrollTop: $('.' + section).position().top }, 1000);

	if ($('.menu-header__menu').hasClass('active')) {
		$('.menu-header__menu,.menu-header__icon').removeClass('active');
		$('body').removeClass('lock');
	}
});