const swiper1 = new Swiper('.swiper-1', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
  
    // Navigation arrows
 /*    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, */
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


let swiper2;
const slider2 = document.querySelector('.swiper-2');
function mobileSlider(sliderName) {
	if (window.innerWidth <= 600 && sliderName.dataset.mobile == 'false') {
		swiper2 = new Swiper(sliderName, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			//slideClass: 'card',
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
      pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
      },
		});

		sliderName.dataset.mobile = 'true';
	}

	if (window.innerWidth > 479.98) {
		sliderName.dataset.mobile = 'false';
		if (sliderName.classList.contains('swiper-container-initialized')) {
			swiper2.destroy(); //имя слайдера
		}
	} else {
    //mobileSlider(slider2);
  }
}


//=====================Общая функция==============================
mobileSlider(slider2);
//mobileSlider(slider3);

window.addEventListener('resize', () => {
	mobileSlider(slider2);
  //mobileSlider(slider3);
});

  
//======================== 3 SLIDER ================================================
const swiper3 = new Swiper('.swiper-3', {

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    //type: 'custom', 
    /* bulletClass:'swiper-pagination-bullet', */
    dynamicBullets: 'true',
    renderBullet: function (index, className) {
      return '<img src="/img/human/' + (index + 1) + '.png" class="' + className + '">' + (index + 1) + '</img>';
    },
  },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 

});