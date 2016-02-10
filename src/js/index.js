/**
 * Created by Geordi on 11/27/2015.
 */

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

/*
 *   SLIDE MORE/LESS Animations
 * */

function showMorePress(btn) {
    var slidePar = $(btn).parent().parent();

    //Fade out 'less'
    $(slidePar).find('.s_less').fadeOut();

    //Fade in 'more'
    var moreRoot = $(slidePar).find('.s_more');
    $(moreRoot).fadeIn(600);

    //Animate images
    $(moreRoot).find('.s_more_images')
        .delay(1000).animate(
        {right: '10%'}, {
            duration: 1000,
            easing: 'easeOutCirc'});

    //Animate content
    $(moreRoot).find('.s_more_content')
        .delay(1500).animate(
        {left: '10%'}, {
            duration: 1000,
            easing: 'easeOutCirc'});
}