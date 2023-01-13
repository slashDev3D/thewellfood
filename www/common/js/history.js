const scrollView = document.querySelectorAll(".scroll-detect")
var winHeight = window.innerHeight

scrollView.forEach(function(el,i){
    let elTop = el.offsetTop;
    let setTime = i * 1000
    console.log(setTime)
    if(winHeight>elTop){
        el.classList.add("on-view")
    }
})//onload -> add class "on-view" for each scroll-detect in viewport.