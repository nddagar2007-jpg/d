(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', () => {
        elementorFrontend.hooks.addAction('frontend/element_ready/luxtower-theview.default', ($scope) => {
            let $carousel = $('.luxtower-carousel', $scope);
            let $carousel2 = $('.news__arrows', $scope);
            if ($carousel.length > 0) {
                let data = $carousel.data('settings');
                $carousel.slick({
                    rtl: data.rtl,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: $carousel2,

                });

                $carousel2.slick(
                    {
                        rtl: data.rtl,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        asNavFor: $carousel,
                        dots: false,
                        arrows: data.navigation == 'both' || data.navigation == 'arrows' ? true : false,
                        centerMode: true,
                        focusOnSelect: true,
                        draggable: false,
                        adaptiveHeight: true,
                        centerPadding: '0px',
                    }
                );
            }
        });
    });

})(jQuery);
