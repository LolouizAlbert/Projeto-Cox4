
const glider = new Glider(document.getElementById('glider'));

function sliderAuto(slider, miliseconds) {
 const slidesCount = slider.track.childElementCount;
 let slideTimeout = null;
 let nextIndex = 1;

 function slide () {
   slideTimeout = setTimeout(
     function () {
       if (nextIndex >= slidesCount ) {
         nextIndex = 0;
       }
       slider.scrollItem(nextIndex++);
     },
     miliseconds
   );
 }

 slider.ele.addEventListener('glider-animated', function() {
   window.clearInterval(slideTimeout);
   slide();
 });

 slide();
}

sliderAuto(glider, 5000)

new Glider(document.querySelector('.glider'), {
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

//   function sliderAuto(slider, miliseconds) {
//     slider.isLastSlide = function() {
//       return slider.page >= slider.dots.childElementCount - 1;
//     }
   
//     var slide = function() {
//       slider.slideTimeout = setTimeout(function() {
//         function slideTo() {
//           return slider.isLastSlide() ? 0 : slider.page + 1;
//         }
   
//         slider.scrollItem(slideTo(), true);
//       }, miliseconds);
//     }
   
//     slider.ele.addEventListener('glider-animated', function(event) {
//       window.clearInterval(slider.slideTimeout);
//       slide();
//     });
   
//     slide();
//    }
