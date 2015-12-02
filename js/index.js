/**
 * Created by Geordi on 11/27/2015.
 */

//$(window).scroll(calculateHeaderPicScrollAnimation($));
var headerIsUpTop = true;

$(document).ready(function() {
    calculateHeadProfilePicVisibility()
})

$(window).scroll(function() {
    calculateHeadProfilePicVisibility();
})

function calculateHeadProfilePicVisibility() {
    var headpic = $("#header_profile");
    var aboutpic = $("#about_profile");

    var headtop = topPosFromTop(headpic);
    var abouttop = topPosFromTop(aboutpic);

    if (headtop > abouttop) {
        //header image is below about image, so hide header
        headpic.removeClass("visible");
        headpic.addClass("invisible");
        aboutpic.removeClass("invisible");
        aboutpic.addClass("visible");
    } else {

        //header is above, so hide about
        headpic.addClass("visible");
        headpic.removeClass("invisible");
        aboutpic.addClass("invisible");
        aboutpic.removeClass("visible");
    }
}

function topPosFromTop(element) {
    return (element.offset().top - $(window).scrollTop());
}

function botPosFromTop(element) {
    return topPosFromTop(element) + element.height();
}