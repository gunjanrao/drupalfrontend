jQuery(document).ready(function($) {
    jQuery('.slider-container').each(function () {
        // Check if the slider is already initialized to avoid re-initialization
        if (!$(this).hasClass('slick-initialized')) {
            console.log("Initializing slick slider");
            jQuery(this).slick({
                dots: false, 
                arrows: true, 
                infinite: true,
                speed: 500, 
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024, 
                        settings: {
                            slidesToShow: 2, 
                            slidesToScroll: 1,
                            dots: true, 
                            arrows: false 
                        }
                    },
                    {
                        breakpoint: 768, 
                        settings: {
                            slidesToShow: 1, 
                            slidesToScroll: 1, 
                            dots: true, 
                            arrows: false 
                        }
                    }
                ]
            });
        }
    });
});
