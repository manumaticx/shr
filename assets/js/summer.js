'use strict';

var summer = (function ($) {

    var indexPostClass = '.summer-index-post',
        mobileMenuButton = '.summer-mobile-menu a',
        mobileMenuCloseButton = '.summer-mobile-close-btn',
        mainMenu = '.summer-menu',
        bgCheckClass = '.bg-check',
        postBgImages = '.bg-img img',
        postCoverImg = '.summer-post-header .bg-img',

    mobileMenu = function () {
        if($(mainMenu).length) {
            $(mobileMenuButton).on('click', function(e){
                e.preventDefault();
                $(mainMenu).addClass('opened');
            });
            $(mobileMenuCloseButton).on('click', function(e){
                e.preventDefault();
                $(mainMenu).removeClass('opened');
            });
        }
    },

    headerTitlesBackgroundCheck = function () {
        if ($(bgCheckClass).length && $(postBgImages).length) {
            BackgroundCheck.init({
                targets: bgCheckClass,
                images: postBgImages
            });
        }
    },

    // summer javascripts initialization
    init = function () {
        mobileMenu();
        headerTitlesBackgroundCheck();
    };

    return {
        init: init
    };

})(jQuery);

(function () {
    summer.init();
})();
