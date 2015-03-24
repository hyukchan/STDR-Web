$(document).ready(function() {
    $(window).resize(resize);
    resize();

    $(".s2 .nav a").click(function(e) {
        e.preventDefault();
        switchTitle($(this).attr("data-title"), function(a) {
            $(".s2 .inside img").first().attr("src", "img/s2/gif/" + a + ".gif");
        }, $(this).attr("data-id"));

        return false;
    });
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
}

function switchTitle(newTitle, cb, a) {
    var t = $(".s2 > h1");
    $(".s2 .current").fadeOut(300);
    t.fadeOut(300, function() {
        t.html(newTitle);
        cb(a);
        t.fadeIn(300);
        $(".s2 .desc" + a).fadeIn(300);
        $(".s2 .desc" + a).addClass("current");
    })
}