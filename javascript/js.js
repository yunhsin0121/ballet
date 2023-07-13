$(document).ready(function () {
    // 上滑健
    $("a[href$='.zip']").addClass('fa-solid fa-circle-up text-light-gray fs-1') ;

    $('.btn-up').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0},100);
    });

    $('.btn-up').hide();
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('.btn-up').fadeIn();
        }
        else{
            $('.btn-up').fadeOut();
        }
    });
    // 按鈕特效
    $('.navbar-brand').hover(function () {
        $(this).toggleClass('animate__animated animate__headShake');
    });

    $('.nav-link,header a,.programs .card-link,.slideUp a,footer .btn,footer li').hover(function () {
        $(this).toggleClass('animate__animated animate__pulse');
    });

    $('.classroom a,.course a').hover(function () {
            // over
            $(this).addClass('text-decoration');
            $(this).removeClass('text-decoration-none');
        }, function () {
            // out
            $(this).removeClass('text-decoration');
            $(this).addClass('text-decoration-none');
        }
    );
});