$(document).ready(function(){
    let $ball = $('.mirror-ball-container');
    let $one = $('#one');

    for (let i=0; i<100; i++) {
        $('<div class="mirror-ball-particle"></div>').appendTo($ball);
    }

    let $learnMore = $('.learn-more');
    $learnMore.click(function(){
         $('html, body').animate({
            scrollTop: $one.offset().top
        }, 1000, 'swing');;
    });

});