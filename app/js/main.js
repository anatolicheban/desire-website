$(function () {
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/slider-prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/slider-next.svg" alt="next"></button>'
    });

    $('.contact__slider').slick({
        slidesToShow: 10,
        dots: true,
        arrows: false,
        slidesToScroll: 10
    });
    
    var galleryInner = document.querySelectorAll('.gallery__inner')

    var mixer = mixitup(galleryInner, {
        load: {
            filter: '.living'
        },
        animation: {
            effectsIn: 'fade translateX(-100%)',
            effectsOut: 'fade translateY(100%)'
        }
    });
});




const headerButton = document.querySelector('.header__btn');
const rightsiedeMenu = document.querySelector('.rightside-menu');
const rightsiedeMenuClose = document.querySelector('.rightside-menu__close');

headerButton.addEventListener('click', function() {
    rightsiedeMenu.classList.remove('rightside-menu--close');
})
rightsiedeMenuClose.addEventListener('click', function() {
    rightsiedeMenu.classList.add('rightside-menu--close');
})
