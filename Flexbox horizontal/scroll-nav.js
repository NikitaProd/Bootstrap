

// <!-- SCRIPT SCROLL ANIMATE------------------>

$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var ou = $(this).attr("href").substr(1);
    var saut = $("[id='"+ ou +"']");
    $('html,body').animate({scrollTop: $(saut).offset().top}, 1200);
    return false;
  });
});


// //jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });
//
// //jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $('.page-scroll a').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });
