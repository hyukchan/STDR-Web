function HeightBackground() {
    height = $(window).height();
    $("#cover").css({
        'height': height
    });
}

function ShrinkNavbar() {
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $("#st-navbar").removeClass('full');
            $("#st-navbar").addClass('shrink');
        } else {
            $("#st-navbar").removeClass('shrink');
            $("#st-navbar").addClass('full');
        }
    })
}

function EraseHeaderContent() {
    scrollPos = $(this).scrollTop();
    $("#header-content").css({
        'margin-top': (scrollPos / 4) + "px",
        'opacity': 1 - (scrollPos / 250)

    })
}

$(document).ready(function() {
    HeightBackground();
    $(window).resize(function() {
        HeightBackground();
    })
    $(window).scroll(function() {
        ShrinkNavbar();
        EraseHeaderContent();
    })
})

$(document).on('click','#navbar-ico-resp',function(){
    $("#st-navbar").toggleClass('responsive');
})

$(".discover-btn").click(function() {
    var offset = 20;

    $('html, body').animate({
        scrollTop: $("#first-section").offset().top + offset
    }, 2000);
});