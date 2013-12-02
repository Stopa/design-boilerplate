;(function($) {
	// Example functions
	var commonFunction = function() {
		console.log('Do stuff on common pages');
	};

	var blogFunction = function() {
		console.log('Do stuff on blog & news pages');
	};

	var articleFunction = function() {
		console.log('Do stuff on article pages');
	};

	var globalFunction = function() {
		console.log('Do stuff everywhere');
	};

	// General functions
	var toggleMainMenu = function() {
		$(".menu-btn").click(function() {
			$(".main-menu").slideToggle("fast").toggleClass('expanded');
		});
	};
	
	var toggleLangMenu = function() {
		$('.lang-btn').click(function() {
			$('.lang-menu-popover').fadeToggle(100);
		});
	};

	var handleWindowResize = function() {
		$(window).resize(function() {
			if ($(window).width() <= 480) {
				if (!$('.main-menu').hasClass('expanded')) {
					$('.main-menu').hide();
				}
			} else {
				$('.main-menu').show();
			}
		});
	};

	// Adds class 'active' to main menu current element (Delete this function if the Edicy generated menu has been set up).
	var hightlightActivePage = function() {
		var url = window.location.href;
		$('.menu a').filter(function() {
			return this.href == url;
		}).parent().addClass('active');
	};

	// Initiations
	var initCommonPage = function() {
		commonFunction();
	};

	var initBlogPage = function() {
		blogFunction();
	};

	var initArticlePage = function() {
		articleFunction();
	};

	var init = function() {
		globalFunction();
		toggleMainMenu();
		toggleLangMenu();
		handleWindowResize();
		hightlightActivePage();
	};

	window.project = {
		initCommonPage: initCommonPage,
		initBlogPage: initBlogPage,
		initArticlePage: initArticlePage
	};

	init();
})(jQuery);