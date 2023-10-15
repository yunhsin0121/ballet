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



let choosePlanBtn = document.getElementById('choosePlan');
let completeInformationBtn = document.getElementById('completeInformation');
let completeReservationBtn = document.getElementById('completeReservation');
let choosePlan = document.querySelector('.choosePlan');
let completeInformation = document.querySelector('.completeInformation');
let completeReservation = document.querySelector('.completeReservation');
let experienceName = '';
let levelName = '';

// 立即預約頁面－體驗選擇
let ChooseExperience = document.querySelector('.ChooseExperience');
let ChooseExperienceMenu = document.querySelectorAll('.ChooseExperience a');
ChooseExperience.addEventListener('click',e=>{
    e.preventDefault();
    ChooseExperienceMenu.forEach(item=>{
        item.classList.remove('active');
     })
   if(e.target.nodeName === 'A'){
    if(e.target.dataset.name  === 'firstTime'){
        e.target.classList.add('active');
        experienceName = e.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
    }else if(e.target.dataset.name === 'short-term'){
        e.target.classList.add('active');
        experienceName = e.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
    }else{
        e.target.classList.add('active');
        experienceName = e.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
    }
    console.log(experienceName)
    updatePlanName()
   }
})

// 立即預約頁面－階級按鈕切換
let chooseLevel = document.querySelector('.chooseLevel');
let chooseLevelMenu = document.querySelectorAll('.chooseLevel div');
console.log(chooseLevelMenu)
chooseLevel.addEventListener('click',e=>{
    chooseLevelMenu.forEach(item=>{
       item.children[0].classList.remove('active');
    })
    let chooseLevelItem = e.target.closest('div');
   if(chooseLevelItem.dataset.name === 'beginner'){
        chooseLevelItem.classList.add('active')
        levelName = chooseLevelItem.children[0].textContent;
   }else if(chooseLevelItem.dataset.name === 'basic'){
        chooseLevelItem.classList.add('active')
        levelName = chooseLevelItem.children[0].textContent;
   }else{
    chooseLevelItem.classList.add('active')
    levelName = chooseLevelItem.children[0].textContent;
   }
   console.log(levelName)
   updatePlanName()
})

// 渲染planName的內容
function updatePlanName(){
    let planName = document.querySelector('.planName');
    planName.textContent=`${experienceName}課程-${levelName}`
    let finishedPlanName = document.querySelector('.finishedPlanName');
    finishedPlanName.textContent=`${experienceName}課程-${levelName}`;
}

//點擊繼續預約按鈕跳表單內容
let nextBtn = document.querySelector('.nextBtn');
nextBtn.addEventListener('click',e=>{
    ChooseExperienceMenu.forEach(item=>{
        if(item.classList.contains('active')){
            chooseLevelMenu.forEach(item=>{
                if(item.children[0].classList.contains('active')){
                    console.log('yesssss');
                }
             })
        }
     })
    choosePlan.classList.add('d-none')
    choosePlan.classList.remove('d-block')
    completeInformation.classList.add('d-block')
    completeInformation.classList.remove('d-none')
    completeReservation.classList.add('d-none')
    completeReservation.classList.remove('d-block')
    choosePlanBtn.classList.remove('active');
    completeInformationBtn.classList.add('active');
})

// 填寫資料頁面
let date = document.getElementById('date');
let guestName = document.getElementById('name');
let age = document.getElementById('age');
let gender = document.getElementById('gender');
let email = document.getElementById('email');
let number = document.getElementById('number');
let submitBtn = document.querySelector('.submitBtn');
let reservationInfo = document.querySelector(".reservationInfo");

submitBtn.addEventListener('click',e=>{
    e.preventDefault();
    reservationInfo.innerHTML =`<li class="mb-1">上課預約報到日：<span class="text-secondary fw-bold">${date.value}</span></li>
    <li class="mb-1">預約人：<span class="text-secondary fw-bold">${guestName.value}</span></li>
    <li class="mb-1">年齡：<span class="text-secondary fw-bold">${age.value} 歲</span></li>
    <li class="mb-1">性別：<span class="text-secondary fw-bold">${gender.value}</span></li>
    <li class="mb-1">電子信箱：<span class="text-secondary fw-bold">${email.value}</span></li>
    <li class="mb-1">手機號碼：<span class="text-secondary fw-bold">${number.value}</span></li>`
    if((date.value === '')||(guestName.value.trim() === '')||(age.value.trim() === '')||(gender.value.trim() === '')||(email.value.trim() === '')||(number.value.trim() === '')){
        alert('尚有資料未填寫')
    }else{
        alert('已完成預約，將會寄送通知至電子信箱，如需更改資料請來電更改資料，謝謝！')
        choosePlan.classList.add('d-none')
        choosePlan.classList.remove('d-block')
        completeInformation.classList.add('d-none')
        completeInformation.classList.remove('d-block')
        completeReservation.classList.add('d-block')
        completeReservation.classList.remove('d-none')
        completeInformationBtn.classList.remove('active');
        completeReservationBtn.classList.add('active');
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
