// const MainSlideoption = {}
const MainSlide = new Swiper('.main_slide', {
    loop: true,
});

const leftArrow = document.querySelector('#mainVisual .arrows .left');
leftArrow.addEventListener('click', function () {
    MainSlide.slidePrev();
})
const rightArrow = document.querySelector('#mainVisual .arrows .right');
rightArrow.addEventListener('click', function () {
    MainSlide.slideNext();
});
// 함수를 만들어 쓸 때 순서 중요
// function option(){}

const proSlide = new Swiper('.pro_slide', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".sbar",
        type: "progressbar",
    },
})