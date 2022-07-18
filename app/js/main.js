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
        slidesToScroll: 10,
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToScroll: 8,
                slidesToShow: 8,
              }
            },
            {
              breakpoint: 1511,
              settings: {
                slidesToScroll: 6,
                slidesToShow: 6,
              }
            },
            {
              breakpoint: 1201,
              settings: {
                slidesToScroll: 4,
                slidesToShow: 4
              }
            },
            {
                breakpoint: 841,
                settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 551,
                settings: {
                  slidesToScroll: 2,
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 375,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }
              }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
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
const headerBtnMenu = document.querySelector('.header__btn-menu');
const headerMenu = document.querySelectorAll('.menu');

headerButton.addEventListener('click', function () {
    rightsiedeMenu.classList.remove('rightside-menu--close');
});
rightsiedeMenuClose.addEventListener('click', function () {
    rightsiedeMenu.classList.add('rightside-menu--close');
});

headerBtnMenu.addEventListener('click', function () {
    headerMenu.forEach((el) => {
        el.classList.toggle('menu--open');
    });
});

if (window.innerWidth <= 650 && document.querySelector('.works-path__items')) {
    document.querySelector('.works-path__items').innerHTML = `
    <div class="works-path__items">
  <div class="works-path__items-box">
    <div class="works-path__item works-path__item--consultation">
      <img class="works-path__item-img" src="images/graphic-tool.svg" alt="icon">
      <h6 class="works-path__item-title">Designer Consultation</h6>
      <p class="works-path__item-text">Kinfolk scenester authentic craft beer truffaut irony intelligentsia
        YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche</p>
    </div>
    <div class="works-path__item works-path__item--measuring">
      <img class="works-path__item-img" src="images/measuring-tape.svg" alt="icon">
      <h6 class="works-path__item-title">Measurements</h6>
      <p class="works-path__item-text">Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo
        viral cliche</p>
    </div>
    <div class="works-path__item works-path__item--production">
      <img class="works-path__item-img" src="images/sofa.svg" alt="icon">
      <h6 class="works-path__item-title">Production</h6>
      <p class="works-path__item-text">Everyday carry actually neutra authentic kogi shabby chic</p>
    </div>
  </div>
</div>`
}

