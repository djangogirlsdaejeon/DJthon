$(document).ready(function(){
    let $ball = $('.mirror-ball');
    let particle = $('<div class="mirror-ball-particle"></div>');

    for (let i=0; i<50; i++) {
        $('<div class="mirror-ball-particle"></div>').appendTo($ball);
    }
});