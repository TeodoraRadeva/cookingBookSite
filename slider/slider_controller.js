jQuery(document).ready(function ($) {
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
   // $('#slider').css({ width: slideWidth, height: slideHeight });
    
    //$('#slider #foodImages').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
   // $('#slider #foodImages .instaGallery:last-child').prependTo('#slider #foodImages');

    function moveLeft() {
        $('#slider #foodImages').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider #foodImages .instaGallery:last-child').prependTo('#slider #foodImages');
            $('#slider #foodImages').css('left', '');
        });
    };

    function moveRight() {
        $('#slider #foodImages').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider #foodImages .instaGallery:first-child').appendTo('#slider #foodImages');
            $('#slider #foodImages').css('left', '');
        });
    };

    $('a.prev').click(function () {
        moveLeft();
    });

    $('a.next').click(function () {
        moveRight();
    });

});    
