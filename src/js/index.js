/**
 * Created by Geordi on 11/27/2015.
 */

$(document).ready(function() {
    setAllShowcaseHeights();
});

$(window).resize(function() {
    setAllShowcaseHeights();

    makeSureShowcaseElementsAreCentered();
});

/*
* Centers showcase elements when going from desktop to mobile
* */
function makeSureShowcaseElementsAreCentered() {
    var bool = $(window).width() < 750;

    $('.showcase_slide').each(function () {
        if(bool) {
            $(this).find('.s_more_images').css('right', 'auto');
            $(this).find('.s_more_content').css('left', 'auto');
        } else {
            $(this).find('.s_more_images').css('right', '10%');
            $(this).find('.s_more_content').css('left', '10%');
        }

    });
}

/*
* Make sure each slide's minimum height encompasses
*   it's more text.
*
* When switching from less to more, pass true so that
* we can animate the growing div
*
* @param 'more' use when switching from less to more.
* */
function setAllShowcaseHeights() {
    $('.showcase_slide').each(function () {
        if($(this).find('.s_less').css('display') == 'none') {
            setIndShowcaseHeight(this, false);
        }
    })
}

function setIndShowcaseHeight(obj, animate) {
    var fit;
    if($(window).width() > 750) {
        fit = $(obj).find('.s_more_content').outerHeight();
    } else {
        fit = $(obj).find('.s_more_left').outerHeight() +
                $(obj).find('.s_more_right').outerHeight();
        fit = (fit * 100) / 90; //to take care of 90% height in slides
    }


    var value = Math.max(
        $(window).height(),
        fit
    );
    if(animate) {
        $(obj).animate(
            {height : value + "px"},
            {
                duration: 500,
                easing: "easeInOutSine"
            }
        );
    } else {
        $(obj).css('height', value);
    }
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

    //Check if phone or not
    if($(window).width() > 750) {
        //Animate images
        var images = $(moreRoot).find('.s_more_images');
        images.css('right', '-100%');
        images.delay(400).animate(
            {right: '10%'}, {
                duration: 1000,
                easing: 'easeOutCirc'});

        //Animate content
        var content = $(moreRoot).find('.s_more_content');
        content.css('left', '-125%');
        content.delay(900).animate(
            {left: '10%'}, {
                duration: 1000,
                easing: 'easeOutCirc'});
    }

    setIndShowcaseHeight(slidePar, true);
}