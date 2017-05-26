let navbarheight = $(".navbar").height();
let footerheight = $(".footer").height();
let pageheight = $(window).height() - navbarheight - footerheight;
let _firstpage = $("#firstpage");
let _secondpage = $("#secondpage");
let _preisliste = $("#Preisliste");
let _animobjekts = $(".anim");
let _positionPreisliste = _preisliste.offset();
$(document).ready(function () {
    _firstpage.css("height", pageheight + "px");
    _firstpage.css("padding-bottom", footerheight / 2 + "px");
    _firstpage.css("padding-top", navbarheight / 2 + "px");
    _secondpage.css("min-height", pageheight + "px");
    _secondpage.css("padding-top", footerheight / 2 + "px");
    $("body").css("padding-top", navbarheight + "px");
    _animobjekts.each(function (index) {
        $(this).css("display", "none")
    });




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
            _animobjekts.each(function (i ,el ) {
                var el = $(this);
                setTimeout(function () {
                    el.css("display", "block");
                    el.addClass("animated fadeInRight");
                }, 800*i);

            })
        }
    },   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
});
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});