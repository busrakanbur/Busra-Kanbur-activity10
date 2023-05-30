$(document).ready(function() {
    var totalSlides = $('#slider li').length; // Get the total number of slides
    var slider = $('#slider').bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 250,
        slideMargin: 10,
        randomStart: true,
        moveSlides: 1,
        pause: 3000,
        pager: true,
        pagerCustom: '#pager',
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            var slideNumber = newIndex + 1; // Calculate the current slide number
            $('#pager').text(slideNumber + '/' + totalSlides); // Update the pager with the current slide number and total slides
        }
    });

    // Initialize the pager with the initial slide number
    var initialSlideNumber = slider.getCurrentSlide() + 1;
    $('#pager').text(initialSlideNumber + '/' + totalSlides);
});
