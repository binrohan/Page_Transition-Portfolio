//Global Varibale Scope
//Index of current active section
var initialIndex = 0;
//Hamburger Cross animation
function shapeCross(x) {
    x.classList.toggle("w3-change");
  }
//Sidebar shows on click Hamburger in Tabview
function showSidebar(c) {
    var sidebar = document.getElementById("js--sidebar");
    sidebar.classList.toggle("slide-in");
}
//Page Transition Scripts
//Page Transition Configurations
var translate = new transition({
  $main: $('#pt-main'),
  loop: true
});
//Random choose an animation
// var x = 0;
// $('#iterateEffects').click(function () {
//   if (x < 67) {
//       x++;
//   } else {
//       x = 1;
//   }
//   //var x = Math.ceil(Math.random() * 67);
//   translate.prevPage(x);
// });
//Next Section Button 
$('.next').click(function () {
  translate.nextPage(2);
  $( "body" ).find( ".pt-trigger" ).eq(initialIndex).toggleClass('active-menu');
  initialIndex++;
  $( "body" ).find( ".pt-trigger" ).eq(initialIndex).toggleClass('active-menu');
});
//Previous Section Button
$('.prev').click(function () {
  translate.prevPage(1);
  $( "body" ).find( ".pt-trigger" ).eq(initialIndex).toggleClass('active-menu');
  initialIndex--;
  $( "body" ).find( ".pt-trigger" ).eq(initialIndex).toggleClass('active-menu');
});
//Jump To any Section
//And Sidebar active menu CSS
$('.pt-trigger').click(function () {
  var index = $('.pt-trigger').index(this);
  translate.jumpTo(1, index);
  $( "body" ).find( ".pt-trigger" ).eq(initialIndex).toggleClass('active-menu');
  $(this).toggleClass('active-menu');
  initialIndex = index;
});
//Slide Show from OWl CAROUSEL
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1200:{
          items:3
      }
  }
});
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});
//Waypoint
// $('.code-solved').waypoint(function(direction){
//   $('.count').addClass('counter');
//   $('.list-card h5').addClass('counter');
//   console.log("asda")
// });
//Square Dynamic Divs
// $('.list-card').height($(this).width());
// var waypoint = new Waypoint({
//   element: document.querySelector('.code-solved'),
//   handler: function(direction) {
//     $('.count').addClass('counter');
//     $('.list-card h5').addClass('counter');
//   }
// });
// function onReady(callback) {
//   var intervalId = window.setInterval(function() {
//     if (document.getElementsByTagName('body')[0] !== undefined) {
//       window.clearInterval(intervalId);
//       callback.call(this);
//     }
//   }, 1000);
// }

// function setVisible(selector, visible) {
//   document.querySelector(selector).style.display = visible ? 'block' : 'none';
// }

// onReady(function() {
//   setVisible('.page-layout', true);
//   setVisible('#loading', false);
// });