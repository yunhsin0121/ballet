$(document).ready(function () {
    // 上滑按鈕
    $("a[href$='.zip']").addClass('bi bi-arrow-up-circle text-secondary fs-1  ') ;

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

    $('.nav-item,header a,.programs .card-link,.slideUp a').hover(function () {
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
    AOS.init();
});

// 立即預約選單頁面切換
let reservationMenu = document.querySelector('.ReservationMenu');
let reservationMenuArr = document.querySelectorAll('.ReservationMenu a');
let choosePlan = document.querySelector('.choosePlan');
let completeInformation = document.querySelector('.completeInformation');
let completeReservation = document.querySelector('.completeReservation');
reservationMenu.addEventListener('click',e=>{ 
    e.preventDefault();
    reservationMenuArr.forEach(item=>{
        item.classList.remove('active');
    })
    e.target.classList.add('active');
    if(e.target.dataset.name === 'choosePlan'){
        choosePlan.classList.add('d-block')
        choosePlan.classList.remove('d-none')
        completeInformation.classList.add('d-none')
        completeInformation.classList.remove('d-block')
        completeReservation.classList.add('d-none')
        completeReservation.classList.remove('d-block')
    }else if(e.target.dataset.name === 'completeInformation'){
        choosePlan.classList.add('d-none')
        choosePlan.classList.remove('d-block')
        completeInformation.classList.add('d-block')
        completeInformation.classList.remove('d-none')
        completeReservation.classList.add('d-none')
        completeReservation.classList.remove('d-block')
    }else{
        choosePlan.classList.add('d-none')
        choosePlan.classList.remove('d-block')
        completeInformation.classList.add('d-none')
        completeInformation.classList.remove('d-block')
        completeReservation.classList.add('d-block')
        completeReservation.classList.remove('d-none')
    }
})
// 首頁swiper
var feedbackSwiper = new Swiper(".feedbackSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    cssMode:true,
    mousewheel: {
        invert: true,
    }   ,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
        slidesPerView: 1,
        spaceBetween: 30
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 30
        },
        991: {
        slidesPerView: 3,
        spaceBetween: 20
        },
    }
});
