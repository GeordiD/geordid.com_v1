/**
 * Created by Geordi on 11/27/2015.
 */

$(document).ready(function() {
    setAllShowcaseHeights();
})

$(window).resize(function() {
    setAllShowcaseHeights();
})

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
    var value = Math.max(
        $(window).height(),
        $(obj).find('.s_more_content').outerHeight()
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

    //Animate images
    $(moreRoot).find('.s_more_images')
        .delay(400).animate(
        {right: '10%'}, {
            duration: 1000,
            easing: 'easeOutCirc'});

    //Animate content
    $(moreRoot).find('.s_more_content')
        .delay(900).animate(
        {left: '10%'}, {
            duration: 1000,
            easing: 'easeOutCirc'}, setIndShowcaseHeight(slidePar, true));
}