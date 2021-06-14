// Mobile Nav
// $(document).ready(function(){
//   $(".mob-button").click(function(){
//   	// $(".nav-container").toggleClass("nav-container-active");
//     $(".main-nav").toggleClass("main-nav-active");
//   	$(".sub-nav").toggleClass("sub-nav-active");
//   	$(".tel-number").toggleClass("tel-number-active");
//   });
// });
// $(document).ready(function(){
//   $(".mob-button").click(function(){
//     $(".mob-button").toggleClass("is-active");
//   });
// });


// Options list
$('.wrap-community-box .community-box').on('mouseover', function() {
  var _this = $(this);

  _this.addClass('active');
  _this.siblings().removeClass('active');
});

// Mobile Nav
$(document).ready(function(){
  $(".mob-button").click(function(){
	event.preventDefault();
    $(".mob-button").toggleClass("is-active");
  });
});
$(document).ready(function(){
  $(".mob-button").click(function(){
	event.preventDefault();
    $(".main-nav").toggleClass("nav-active");
  });
});

// Accordion
$('.accordion-title').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('.accordion-content').removeClass('show');
        $this.parent().parent().find('.accordion-content').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});


// Accordion
$(document).ready(function(){
  $(".cg__accordion-group").click(function(){
  event.preventDefault();
    $(this).toggleClass("is-opened");
  });
});



//- Slick Slider Our Partner Section
$('.autoplay').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
		breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplaySpeed: 2000,
			}
		},
		{
		breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplaySpeed: 2000,
			}
		},
		{
		breakpoint: 570,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplaySpeed: 2000,
			}
		}
	]
});




//- Counter Section
var a = 0;
if ($('#counter').length) {
	$(window).scroll(function() {
	  var oTop = $('#counter').offset().top - window.innerHeight;
	  if (a == 0 && $(window).scrollTop() > oTop) {
	    $('.counter-value').each(function() {
	      var $this = $(this),
	        countTo = $this.attr('data-count');
	      $({
	        countNum: $this.text()
	      }).animate({
	          countNum: countTo
	        },
	        {
	          duration: 2000,
	          easing: 'swing',
	          step: function() {
	            $this.text(Math.floor(this.countNum));
	          },
	          complete: function() {
	            $this.text(this.countNum);
	            //alert('finished');
	          }
	        });
	    });
	    a = 1;
	  }
	});
}




// BUTTON SCROLL TOP

$(document).ready(function() {
  // declare variable
  var scrollTop = $(".scrollTop");
  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();
    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  }); // scroll END
  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  }); // click() scroll top EMD
}); // ready() END


// Header Fixed to Scroll Page
function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 50,
        header = document.querySelector("header");
    if (distanceY > shrinkOn) {
        classie.add(header,"smaller");
    } else {
        if (classie.has(header,"smaller")) {
            classie.remove(header,"smaller");
        }
    }
  });
}
window.onload = init();


// //------------- Google Map
// function initMap() {
// 	var element = document.getElementById('map');
// 	var options = {
// 		zoom: 7,
// 		center: {lat: 49.606983, lng: 28.629924}
// 	};

// 	var myMap = new google.maps.Map(element, options);

// 	//- var marker = new google.maps.Marker({
// 	//- 	position: {lat: 50.6199, lng: 26.2516},
// 	//- 	map: myMap
// 	//- })

// 	// Велика кільцева (339км Київ - Чоп)
// 	var marker = new google.maps.Marker({
// 		position: {lat: 50.583133, lng: 26.154219},
// 		map: myMap
// 	})

// 	// Рівне вул. Дворецька, 120А
// 	var marker = new google.maps.Marker({
// 		position: {lat: 50.607094, lng: 26.229484},
// 		map: myMap
// 	})

// 	// Умань вул. Залізняка, 2А
// 	var marker = new google.maps.Marker({
// 		position: {lat: 48.759215, lng: 30.202219},
// 		map: myMap
// 	})

// 	// с. Нова Любомирка
// 	var marker = new google.maps.Marker({
// 		position: {lat: 50.748876, lng: 26.384954},
// 		map: myMap
// 	})

// 	// Рівне вул. Присадибна 15
// 		var marker = new google.maps.Marker({
// 		position: {lat: 50.591714, lng: 26.223827},
// 		map: myMap
// 	})

// 	//- var InfoWindow = new google.maps.InfoWindow ({
// 	//- 	content: '<h3>Hello</h3>'
// 	//- })

// 	//- marker.addListener('click', function(){
// 	//- 	InfoWindow.open(myMap, marker);
// 	//- })
// }
// // --------------- Cargo -----------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
