let navbarheight = $(".navbar").height();
let footerheight = $(".footer").height();
let _mobilecontact = $("#mobilecontact");
let _contacts = $("#contacts");
let _firstpage = $("#firstpage");
let _secondpage = $("#secondpage");
let _thirdpage = $("#thirdpage");
let _fourthpage = $("#fourthpage");
let _animobjekts = $(".anim");
let _content = $(".content");
let _arrowdown = $(".arrow");

window.onload = function () {
    _content.css("padding-top", navbarheight + 10 + "px");
    contact();
    video();
    _animobjekts.each(function (index) {
        $(this).css("display", "none")
    });

    $(".arrowdown").click(function () {
        $(".main").moveDown();
    });
};

$(window).resize(function () {
    contact();
    video();
});
$(".main").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function (index) {
    },  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function (index) {
        if (_secondpage.hasClass("active") == true) {
            _animobjekts.each(function (i) {
                var elem = $(this);
                setTimeout(function () {
                    elem.css("display", "block");
                    elem.addClass("animated fadeInRight");
                }, 800 * i);

            });
            _arrowdown.css("display", "none");
            _arrowdown.css("content", "");
        }
        else if (_thirdpage.hasClass("active") == true) {
            _arrowdown.css("display", "none");
            _arrowdown.css("content", "");
        }
        else if (_fourthpage.hasClass("active") == true){
            _arrowdown.css("display","none");
            _arrowdown.css("content", "");
        }
        else {
            _arrowdown.css("display", "block");
        }
    },   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
});
function contact() {
    _contacts[0].style.bottom = footerheight + "px";
    _mobilecontact.css("bottom", footerheight + "px");

}

function cyclebarber(name) {
    let _activebarber = $(name);
    let _activebarbersmenu = $(name + "menu");

    $(".activemenuitem").removeClass("activemenuitem");
    $(".activebarber").removeClass("activebarber");

    _activebarber.addClass("activebarber");
    _activebarbersmenu.addClass("activemenuitem");

}

function video() {
    let video = $(".youtube iframe")[0];
    video.style.position = "absolute";
    video.style.top = navbarheight + "px";
    video.style.left = "0";
    video.style.height = ($("#fourthpage").height() - footerheight - navbarheight) + "px";

}