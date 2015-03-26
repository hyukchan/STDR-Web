var tutoState = 0;
var screenState = 0;
var i1;
var i2;
$(document).ready(function() {
    $(window).resize(resize);
    resize();

    $(".s2 .nav a").click(function(e) {
        if(screenState != $(this).attr("data-id")) {
            var right = screenState < $(this).attr("data-id");
            screenState = $(this).attr("data-id");

            switchImage(screenState, right)
            switchTitle($(this).attr("data-title"), function (a) {}, $(this).attr("data-id"));
        }
    });

    $('.s2 [data-toggle="popover"]').popover({
        container: 'body'
    });
    $(".s2 .tuto1").popover('show');

    $(".s2").bind('click', function() {
        switch(tutoState) {
            case 0:
                $(".s2 .tuto1").popover('hide').removeClass("tuto-on");;
                $(".s2 .tuto2").popover('show');
                $(".s2 .leftPanel").addClass("tuto-on");
                tutoState++;
                break;
            case 1:
                $(".s2 .leftPanel").removeClass("tuto-on");
                $(".s2 .tuto2").popover('hide');
                $(".s2 .tuto3").popover('show');
                $(".s2 .rightPanel").addClass("tuto-on");
                tutoState++;
                break;
            case 2:
                $(".s2 .tuto3").popover('hide');
                $(".s2 .rightPanel").removeClass("tuto-on");
                break;
        }

        return false;
    });

    i1 = $(".s2 .i1");
    i2 = $(".s2 .i2");
});

function resize () {
    var tab = $(".s2 .tablet");
    var left = $(".s2 .left");
    var decal;
    if((left.width()/left.height()) > (1611 / 1080)) { //large
        decal = (left.width() - (left.height() * 1611 / 1080)) / 2;
        tab.css("top", "0");
        tab.css("left", decal + "px");
        tab.css("width", (left.height() * 1611 / 1080) + "px");
        tab.css("height", left.height() + "px");
    }
    else { //haut
        decal = (left.height() - (left.width() * 1080 / 1611)) / 2;
        tab.css("top", decal + "px");
        tab.css("left", "0");
        tab.css("width", left.width() + "px");
        tab.css("height", (left.width() * 1080 / 1611) + "px");
    }

    $(".desc").each(function() {
        $(this).css("top", "-" + ($(this).height()/2) + "px");
    });
}

function switchTitle(newTitle, cb, a) {
    var t = $(".s2 > h3");
    $(".s2 .current").fadeOut(300);
    t.fadeOut(300, function() {
        t.html(newTitle);
        cb(a);
        t.fadeIn(300);
        $(".s2 .desc" + a).fadeIn(300);
        $(".s2 .desc" + a).addClass("current");
    })
}

function switchImage(a, right) {
    i2.attr("src", "img/s2/gif/" + a + ".gif");

    if(right) {
        i1.css("left", "0%");
        i2.css("left", "100%");

        i2.animate({
            left: "0%"
        }, 600);

        i1.animate({
            left: "-100%"
        }, 600, _switch);
    }
    else {
        i1.css("left", "0%");
        i2.css("left", "-100%");

        i2.animate({
            left: "0%"
        }, 600);

        i1.animate({
            left: "100%"
        }, 600, _switch);
    }
}

function _switch() {
    var src = i1.attr("src");
    i1.attr("src", i2.attr("src"));
    i2.attr(src);
}