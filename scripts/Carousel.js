const glider = new Glider(document.getElementById('glider'), {
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: ".js-carousel--simple-dots",
    arrows: {
        prev: ".js-carousel--simple-prev",
        next: ".js-carousel--simple-next",
    },
});


function sliderAuto(slider, miliseconds) {
    var tempo = miliseconds
    const slidesCount = slider.track.childElementCount;
    let slideTimeout = null;
    let nextIndex = 1;

    function slide() {
        slideTimeout = setTimeout(
            function() {
                if (nextIndex >= slidesCount) {
                    nextIndex = 0;
                }
                slider.scrollItem(nextIndex++);
            },
            tempo
        );
    }

    slider.ele.addEventListener('glider-animated', function() {
        window.clearInterval(slideTimeout);
        slide();
    });


    slider.ele.querySelector('.glider-track').getElementsByTagName('article')[0].addEventListener('mouseover', function() {
        tempo = 15000
        console.log(tempo)
    });

    slider.ele.querySelector('.glider-track').getElementsByTagName('article')[0].addEventListener('mouseout', function() {
        tempo = miliseconds
        console.log(tempo)
    });
    
    slider.ele.querySelector('.glider-track').getElementsByTagName('article')[1].addEventListener('mouseover', function() {
      tempo = 15000
      console.log(tempo)
  });

  slider.ele.querySelector('.glider-track').getElementsByTagName('article')[1].addEventListener('mouseout', function() {
      tempo = miliseconds
      console.log(tempo)
  });

  slider.ele.querySelector('.glider-track').getElementsByTagName('article')[2].addEventListener('mouseover', function() {
    tempo = 15000
    console.log(tempo)
});

slider.ele.querySelector('.glider-track').getElementsByTagName('article')[2].addEventListener('mouseout', function() {
    tempo = miliseconds
    console.log(tempo)
});

slider.ele.querySelector('.glider-track').getElementsByTagName('article')[3].addEventListener('mouseover', function() {
  tempo = 15000
  console.log(tempo)
});

slider.ele.querySelector('.glider-track').getElementsByTagName('article')[3].addEventListener('mouseout', function() {
  tempo = miliseconds
  console.log(tempo)
});

// slider.ele.querySelector('.glider-track').getElementsByTagName('article')[4].addEventListener('mouseover', function() {
//   tempo = 15000
//   console.log(tempo)
// });

// slider.ele.querySelector('.glider-track').getElementsByTagName('article')[4].addEventListener('mouseout', function() {
//   tempo = miliseconds
//   console.log(tempo)
// });

// slider.ele.querySelector('.glider-track').getElementsByTagName('article')[5].addEventListener('mouseover', function() {
//   tempo = 15000
//   console.log(tempo)
// });

// slider.ele.querySelector('.glider-track').getElementsByTagName('article')[5].addEventListener('mouseout', function() {
//   tempo = miliseconds
//   console.log(tempo)
// });




    console.log(slidesCount)

    slide();


}



sliderAuto(glider, 5000)


// new Glider(document.querySelector('.glider'), {
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     dots: '.dots',
//     arrows: {
//       prev: '.glider-prev',
//       next: '.glider-next'
//     }
//   });

// //   function sliderAuto(slider, miliseconds) {
// //     slider.isLastSlide = function() {
// //       return slider.page >= slider.dots.childElementCount - 1;
// //     }

// //     var slide = function() {
// //       slider.slideTimeout = setTimeout(function() {
// //         function slideTo() {
// //           return slider.isLastSlide() ? 0 : slider.page + 1;
// //         }

// //         slider.scrollItem(slideTo(), true);
// //       }, miliseconds);
// //     }

// //     slider.ele.addEventListener('glider-animated', function(event) {
// //       window.clearInterval(slider.slideTimeout);
// //       slide();
// //     });

// //     slide();
// //    }