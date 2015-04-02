if (document.documentElement.clientWidth > 992) {
    $(window).on( 'DOMMouseScroll mousewheel', function ( event ) {
        var activeBlocId = $("#st-navbar a.active").attr("href");
        var currentSection = $(activeBlocId);

        if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
            //scroll down
            if(!currentSection.hasClass('last')) {
                $('html, body').animate({scrollTop: currentSection.next().offset().top - 60}, 'slow');
            }
        } else {
            //scroll up
            if(!currentSection.hasClass('first')) {
                $('html, body').animate({scrollTop: currentSection.prev().offset().top - 60}, 'slow');
            }
        }
        //prevent page fom scrolling
        return false;
    });
}