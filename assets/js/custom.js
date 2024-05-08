  // Menu Fixed top Js
	
$(window).scroll(function(){
  var window_top = $(window).scrollTop() + 1; 
  if (window_top > 50) {
      $('.navbar').addClass('menu_fixed animated fadeInDown');
  } else {
      $('.navbar').removeClass('menu_fixed animated fadeInDown');
  }
});

// Homepage Course Carousel Js

jQuery(document).ready(function($) {
  "use strict";
  $('#course-carousel').owlCarousel( {
          loop: true,
          center: true,
          items: 4,
          margin: 0,
          autoplay: true,
          dots:true,
          nav:true,
          responsiveClass:true,
          autoplayTimeout: 5000,
          smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          responsive: {
              0: {
                  items: 1
                },
            
                600: {
                  items: 1
                },
            
                1024: {
                  items: 3
                },
            
                1366: {
                  items: 3
                }
          }
      });
  });


// Homepage Product Carousel Js

jQuery(document).ready(function($) {
  "use strict";
  $('#logo-carousel').owlCarousel( {
          loop: true,
          center: true,
          items: 4,
          margin: 0,
          autoplay: true,
          dots:true,
          nav:true,
          responsiveClass:true,
          autoplayTimeout: 2000,
          smartSpeed: 350,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          responsive: {
              0: {
                  items: 1
                },
            
                600: {
                  items: 2
                },
            
                1024: {
                  items: 5
                },
            
                1366: {
                  items: 5
                }
          }
      });
  });


// Homepage Product Carousel Js

jQuery(document).ready(function($) {
  "use strict";
  $('#partners-carousel').owlCarousel( {
          loop: true,
          center: true,
          items: 4,
          margin: 0,
          autoplay: true,
          dots:true,
          nav:true,
          responsiveClass:true,
          autoplayTimeout: 3000,
          smartSpeed: 350,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          responsive: {
              0: {
                  items: 1
                },
            
                600: {
                  items: 2
                },
            
                1024: {
                  items: 5
                },
            
                1366: {
                  items: 5
                }
          }
      });
  });

  // Homepage Product Carousel Js

jQuery(document).ready(function($) {
  "use strict";
  $('#partners-carousel-2').owlCarousel( {
          loop: true,
          center: true,
          items: 4,
          margin: 0,
          autoplay: true,
          dots:true,
          nav:true,
          responsiveClass:true,
          autoplayTimeout: 1500,
          smartSpeed: 350,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          responsive: {
              0: {
                  items: 1
                },
            
                600: {
                  items: 2
                },
            
                1024: {
                  items: 5
                },
            
                1366: {
                  items: 5
                }
          }
      });
  });


// back to top button

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(function(){
  $('#navbar a').click(function () {
      $('#navbar a').removeClass('active');
      $(this).addClass('active');
   });
});





$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .addClass("fa-minus")
      .removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });
});


