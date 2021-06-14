(function () {

	var cargo = {

		init: function () {
			this.cacheDom();
			this.initSlider();
		},
		cacheDom: function(){
			this.homepageSider = $('.cg__homepageSlider');
		},
		// enablePreloader: function() {
		// 	var preloader = $('#cg__page-loading');
		// 	if ( preloader.length > 0 ) {
		// 		preloader.fadeOut( "slow", function() {
		// 			preloader.remove();
		// 		});
		// 	}
		// },
		initSlider: function() {
			var self = this;
			var revapi1;

			/* homepage slider */
			if(self.homepageSider.revolution === 'undefined'){
				// revslider_showDoubleJqueryError(self.homepageSider);
			} else {
				revapi1 = $("#cg__homepageSlider").show().revolution({
					sliderType:"standard",
					sliderLayout:"fullwidth",
					dottedOverlay:"none",
					delay:4000,
					navigation: {
						keyboardNavigation:"off",
						keyboard_direction: "horizontal",
						mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
						onHoverStop:"off",
						arrows: {
							style:"uranus",
							enable:true,
							hide_onmobile:false,
							hide_onleave:false,
							tmp:'',
							left: {
								h_align:"left",
								v_align:"center",
								h_offset:20,
								v_offset:0
							},
							right: {
								h_align:"right",
								v_align:"center",
								h_offset:20,
								v_offset:0
							}
						}
					},
					visibilityLevels:[1240,1024,778,480],
					gridwidth:1290,
					gridheight:780,
					lazyType:"none",
					shadow:0,
					spinner:"spinner0",
					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					shuffle:"off",
					autoHeight:"off",
					disableProgressBar:"on",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					debugMode:false,
					fallbacks: {
						simplifyAll:"off",
						nextSlideOnWindowFocus:"off",
						disableFocusListener:false,
					}
				});
			}
		},
		addAnimations: function() {
			cargo.hasAnimation.each(cargo.startAnimations);
		},
	};
	cargo.init();
})();

