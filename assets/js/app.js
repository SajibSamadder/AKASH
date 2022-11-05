$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 3000,
        items: 1,

    });
    // Img Compaer 

});

$(window).load(function () {
    $("#quality").twentytwenty({
        default_offset_pct: 0.50, // How much of the before image is visible when the page loads
        orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
        before_label: '', // Set a custom before label
        after_label: '', // Set a custom after label
        no_overlay: true, //Do not show the overlay with before and after
        move_slider_on_hover: false, // Move slider on mouse hover?
        move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
        click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
    });
});