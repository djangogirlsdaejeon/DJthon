$(document).ready(function(){
    let $ball = $('.mirror-ball-container');
    let $one = $('#one');
    let $joinBtn = $('.join-button');
    let $navBar = $('nav');

    if ($(window).scrollTop() > $joinBtn.offset().top) {
            $navBar.fadeIn();
    }

    for (let i=0; i<100; i++) {
        $('<div class="mirror-ball-particle"></div>').appendTo($ball);
    }

    let $learnMore = $('.learn-more');
    $learnMore.click(function(){
         $('html, body').animate({
            scrollTop: $one.offset().top-$navBar.height()
        }, 1000, 'swing');;
    });

    let $navTitle = $('.nav-title');
    $navTitle.click(function(){
         $('html, body').animate({
            scrollTop: 0
        }, 1000, 'swing');;
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > $joinBtn.offset().top) {
            $navBar.fadeIn();
        } else {
            $navBar.fadeOut();
        }
    });


});