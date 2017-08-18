$(document).ready(function(){
    let $ball = $('.mirror-ball-container');
    let $mb = $('.mirror-ball');
    let $spotLight = $('.spotlight');
    let $one = $('#one');
    let $joinBtn = $('.join-button');
    let $navBar = $('nav');

    if ($(window).scrollTop() > $joinBtn.offset().top) {
            $navBar.fadeIn();
    }

    for (let i=0; i<100; i++) {
        $('<div class="mirror-ball-particle"></div>').appendTo($ball);
    }

    $mb.mouseover(()=>{
        $spotLight.addClass('spot-blink');
    });
    
    $mb.mouseout(()=>{
        $spotLight.removeClass('spot-blink');
    });

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

    let $timer = $('#timer');
    let dDay = {};

    setInterval(()=>{ 
        let date = new Date();
        dDay.d = 17 - date.getDate();
        dDay.h = 24 - date.getHours();
        dDay.m = 59- date.getMinutes();
        dDay.s = 59- date.getSeconds();;
        if (dDay.d >= 0) {
            $timer.text('마감까지 '
                + Math.floor(dDay.d/10) + dDay.d%10 + '일 ' 
                + Math.floor(dDay.h/10) + dDay.h%10 + '시간 '
                + Math.floor(dDay.m/10) + dDay.m%10 + '분 '
                + Math.floor(dDay.s/10) + dDay.s%10 + '초'
            )
        } else {
            $timer.text('신청이 마감되었습니다');
        } },1000);
});
