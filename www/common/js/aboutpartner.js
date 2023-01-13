$(".partner--container").removeClass("init")
$(".partner--container").removeClass("on-view")
setTimeout(()=>{
    $(".partner--container").addClass("on-view")
},200)
setTimeout(()=>{
    $(".partner--container").addClass("init")
},400)

