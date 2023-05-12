$('.banner_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 1000,
  nextArrow:".next",
  prevArrow:".prev",
});
$('.comment_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 1000,
  nextArrow:".cnext",
  prevArrow:".cprev",
});
$('.about_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 1000,
  arrows:false,
  dots:true,
});
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
new VenoBox({
  selector: ".venobox"
});
$(".bottom_to_top").click(function(){
  $("html,body").animate({
    scrollTop:0,
  })
},500)

$(window).scroll(function(){
  var scrolling =$(this).scrollTop()
  if (scrolling >20) {
    $(".bottom_to_top").fadeIn()
  }else{$(".bottom_to_top").fadeOut()}

  if (scrolling >20) {
    $(".nav_menu").addClass("bg")
  }else{$(".nav_menu").removeClass("bg")}


})



