var swiper1 = new Swiper(".sysSwiper1",{
  effect: "fade",
  speed: 800,
  // autoplay: true,
  loop:true,
    pagination: {
        el: ".swiper-pagination-sys1",
        clickable: true,
      },
    navigation: {
        nextEl: ".swiper-button-next-sys1",
        prevEl: ".swiper-button-prev-sys1",
      },
})
var swiper2 = new Swiper(".sysSwiper2",{
  effect: "fade",
  speed: 800,
  // autoplay: true,
  looop:true,
  _pagination: {
    el: ".swiper-pagination-sys2",
    clickable: true,
  },
    get pagination() {
      return this._pagination
    },
    set pagination(value) {
      this._pagination = value
    },
    navigation: {
        nextEl: ".swiper-button-next-sys2",
        prevEl: ".swiper-button-prev-sys2",
      },
})
var swiper3 = new Swiper(".sysSwiper3",{
  effect: "fade",
  speed: 800,
  // autoplay: true,
  loop:true,
    pagination: {
        el: ".swiper-pagination-sys3",
        clickable: true,
      },
    navigation: {
        nextEl: ".swiper-button-next-sys3",
        prevEl: ".swiper-button-prev-sys3",
      },
})