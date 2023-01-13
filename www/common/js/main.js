var swiperSub1 = new Swiper(".subSwiper0", {
  speed: 2000,
  autoplay: true,
  effect: "fade",
  allowTouchMove: "false",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-sub0",
    prevEl: ".swiper-button-prev-sub0",
  },
});
var swiperSub2 = new Swiper(".subSwiper1", {
  // slidesPerView: "auto",
  speed: 800,
  // autoplay: true,
  // loop:true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-sub1",
    prevEl: ".swiper-button-prev-sub1",
  },
});
var swiperSub3 = new Swiper(".subSwiper2", {
  // slidesPerView: "auto",
  speed: 800,
  // autoplay: true,
  // loop:true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-sub2",
    prevEl: ".swiper-button-prev-sub2",
  },
});
var swiperSub4 = new Swiper(".subSwiper3", {
  // slidesPerView: "auto",
  speed: 800,
  // autoplay: true,
  loop:true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-sub3",
    prevEl: ".swiper-button-prev-sub3",
  },
});
const header = document.getElementById("header")
var headerHeight = header.clientHeight;
var winH = window.innerHeight - headerHeight
window.addEventListener("resize",function(){
  headerHeight = header.clientHeight;
  winH = window.innerHeight - headerHeight
})
window.addEventListener("scroll",function(){
  winH = window.innerHeight - headerHeight
  if(winH/5<this.scrollY){
    header.classList.remove("white")
  }else{
  header.classList.add("white")
  }
})
