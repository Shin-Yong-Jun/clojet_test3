'use strict';

//배지 배너 가위표 삭제버튼

const badges = header.querySelector('.badges'),
    badge = badges.querySelector('.badge'),
    badgeClose = header.querySelector('.badges .badge .close');

badges.addEventListener('click', (e) => {
    let targetEle = e.target.closest('img');

    if (targetEle.className === 'close') {
        badges.style.display = 'none';
    }
});

window.addEventListener('scroll', () => {
    scrollInvisible(badge, 0, 'hidden', 1, 'visible');
});

//============================
//====== 함수선언 영역  ======
//============================

//성별 판별을 위한 스위치
let sexuality = 0;

function switchMenUl() {
    sexuality = 0;
}
function switchLadyUl() {
    sexuality = 1;
}

//men_lady 컨텐츠 영역 교체 함수
function switchMenLady(
    target,
    main_num,
    section_men,
    list_men,
    section_lady,
    list_lady,
    btnKind,
) {
    if (target.className === 'Men') {
        target.style.color = 'black';
        main_num[1].style.color = '#d6d6d6';

        section_men.style.display = 'block';
        section_men.style.left = '0%';
        list_men.style.left = '100%';
        section_lady.style.display = 'none';

        //레이디 갔다가 맨 등장할때 화면 버튼 visibility 세팅
        btnKind[0].style.visibility = 'hidden';
        btnKind[1].style.visibility = 'visible';
        switchMenUl();
    } else {
        target.style.color = 'black';
        main_num[0].style.color = '#d6d6d6';

        section_lady.style.display = 'block';
        section_lady.style.left = '0%';
        list_lady.style.left = '100%';
        section_men.style.display = 'none';

        //레이디 등장할때 첫화면 버튼 visibility 세팅
        btnKind[0].style.visibility = 'hidden';
        btnKind[1].style.visibility = 'visible';
        switchLadyUl();
    }
}

//============================
//====== 동작문 영역  ======
//============================

//item_list 화살표 슬라이더
/*
- 화살표 백은 처음에 안보이게 하기
- 화살표 클릭할때 한번에 5개씩 보이도록 5% 로 설정
*/

//men lady 교체를 위한 대상잡는 변수 목록

//1. 각 슬라이더 영역의 div박스와 ul의 li a 태그
const main_products1 = document.getElementById('main_products1'),
    main_products1_li = main_products1.querySelectorAll('li a'),
    main_products2 = document.getElementById('main_products2'),
    main_products2_li = main_products2.querySelectorAll('li a'),
    main_products3 = document.getElementById('main_products3'),
    main_products3_li = main_products3.querySelectorAll('li a'),
    //2. 1번째 세일 섹션의 슬라이더 div박스와 남녀 아이템 목록의 ul
    sales_div_men = document.querySelector('.sales_men'),
    sales_list_men = document.querySelector('.sales_men > ul'),
    sales_div_lady = document.querySelector('.sales_lady'),
    sales_list_lady = document.querySelector('.sales_lady > ul'),
    //3. 2번째 계절 섹션의 슬라이더 div박스와 남녀 아이템 목록의 ul
    weather_div_men = document.querySelector('.weather_men'),
    weather_list_men = document.querySelector('.weather_men > ul'),
    weather_div_lady = document.querySelector('.weather_lady'),
    weather_list_lady = document.querySelector('.weather_lady > ul'),
    //4. 3번째  섹션의 슬라이더 div박스와 남녀 아이템 목록의 ul
    new_div_men = document.querySelector('.new_men'),
    new_list_men = document.querySelector('.new_men > ul'),
    new_div_lady = document.querySelector('.new_lady'),
    new_list_lady = document.querySelector('.new_lady > ul');

function switchMenLady(
    target,
    main_num,
    section_men,
    list_men,
    section_lady,
    list_lady,
    btnKind,
) {
    if (target.className === 'Men') {
        target.style.color = 'black';
        main_num[1].style.color = '#d6d6d6';

        section_men.style.display = 'block';
        section_men.style.left = '0%';
        list_men.style.left = '100%';
        section_lady.style.display = 'none';

        //레이디 갔다가 맨 등장할때 화면 버튼 visibility 세팅
        btnKind[0].style.visibility = 'hidden';
        btnKind[1].style.visibility = 'visible';
        switchMenUl();
    } else {
        target.style.color = 'black';
        main_num[0].style.color = '#d6d6d6';

        section_lady.style.display = 'block';
        section_lady.style.left = '0%';
        list_lady.style.left = '100%';
        section_men.style.display = 'none';

        //레이디 등장할때 첫화면 버튼 visibility 세팅
        btnKind[0].style.visibility = 'hidden';
        btnKind[1].style.visibility = 'visible';
        switchLadyUl();
    }
}

main_products1.addEventListener('click', function (e) {
    e.preventDefault();
    let targetLi = e.target.closest('a');
    switchMenLady(
        targetLi,
        main_products1_li,
        sales_div_men,
        sales_list_men,
        sales_div_lady,
        sales_list_lady,
        sales_btn,
    );
});

main_products2.addEventListener('click', function (e) {
    e.preventDefault();
    let targetLi = e.target.closest('a');
    switchMenLady(
        targetLi,
        main_products2_li,
        weather_div_men,
        weather_list_men,
        weather_div_lady,
        weather_list_lady,
        weather_btn,
    );
});

main_products3.addEventListener('click', function (e) {
    e.preventDefault();
    let targetLi = e.target.closest('a');
    switchMenLady(
        targetLi,
        main_products3_li,
        new_div_men,
        new_list_men,
        new_div_lady,
        new_list_lady,
        new_btn,
    );
});

//각 섹션 버튼 좌우 이동 함수

function btnMove(targetBtn, btnKind, targetUl_men, targetUl_lady) {
    if (sexuality === 0 && targetBtn.className === 'btn_foward') {
        targetUl_men.style.left = '4%';
        btnKind[1].style.visibility = 'hidden';
        btnKind[0].style.visibility = 'visible';
    } else if (sexuality === 0 && targetBtn.className === 'btn_back') {
        targetUl_men.style.left = '100%';
        btnKind[1].style.visibility = 'visible';
        btnKind[0].style.visibility = 'hidden';
    } else if (sexuality === 1 && targetBtn.className === 'btn_foward') {
        btnKind[1].style.visibility = 'hidden';
        btnKind[0].style.visibility = 'visible';
        targetUl_lady.style.left = '4%';
    } else if (sexuality === 1 && targetBtn.className === 'btn_back') {
        btnKind[1].style.visibility = 'visible';
        btnKind[0].style.visibility = 'hidden';
        targetUl_lady.style.left = '100%';
    }
}

//item_list 화살표 슬라이더

const item_container1 = document.querySelector('.item_container1'),
    sales_btn = item_container1.getElementsByTagName('a'),
    item_container2 = document.querySelector('.item_container2'),
    weather_btn = item_container2.getElementsByTagName('a'),
    item_container3 = document.querySelector('.item_container3'),
    new_btn = item_container3.getElementsByTagName('a');

//back버튼 초기에 안보이게 세팅
sales_btn[0].style.visibility = 'hidden';
weather_btn[0].style.visibility = 'hidden';
new_btn[0].style.visibility = 'hidden';

item_container1.addEventListener('click', (e) => {
    let targetBtn_sales = e.target.closest('a');
    if (
        targetBtn_sales.className === 'btn_foward' ||
        targetBtn_sales.className === 'btn_back'
    )
        e.preventDefault();
    btnMove(targetBtn_sales, sales_btn, sales_list_men, sales_list_lady);
});

item_container2.addEventListener('click', (e) => {
    let targetBtn_weather = e.target.closest('a');
    if (
        targetBtn_weather.className === 'btn_foward' ||
        targetBtn_weather.className === 'btn_back'
    )
        e.preventDefault();
    btnMove(
        targetBtn_weather,
        weather_btn,
        weather_list_men,
        weather_list_lady,
    );
});

item_container3.addEventListener('click', (e) => {
    let targetBtn_new = e.target.closest('a');
    if (
        targetBtn_new.className === 'btn_foward' ||
        targetBtn_new.className === 'btn_back'
    )
        e.preventDefault();
    btnMove(targetBtn_new, new_btn, new_list_men, new_list_lady);
});

//메인 슬라이드

const slider = document.querySelector('.slider'),
    slides = slider.querySelector('.slides'),
    slide = slides.querySelectorAll('.slide');

const [prevBtn, nextBtn] = slider.querySelectorAll('.slideBtn');
const pager = slider.querySelector('.pager li');

let before_date = -new Date();

function delay() {
    if (new Date() - before_date > 1000 + 100) {
        before_date = new Date();
        return true;
    }
}

slide[0].style.left = 0;
let nowSlide = 0;
let beforeSlide = 0;
let num = 0;
let maxImg = 3;

slider.addEventListener('click', (e) => {
    let targetE = e.target.closest('.slideBtn');
    if (!targetE) return;

    if (delay()) {
        if (targetE.className.includes('next')) {
            clickSlide(nowSlide++, 1);

            num++;
            if (num == maxImg) {
                num = 0;
            }

            let abc = `translateX(${num * 100}%)`;
            pager.style.transform = abc;
        }

        if (targetE.className.includes('prev')) {
            clickSlide(nowSlide--, -1);

            num--;
            let abc = `translateX(${num * 100}%)`;
            pager.style.transform = abc;
        }
    }
});

let stopSlide;
function autoSlide() {
    stopSlide = setInterval(() => {
        clickSlide(nowSlide++, 1);
    }, 2000);
}

autoSlide();

slider.addEventListener('mouseover', (e) => {
    clearInterval(stopSlide);
});

slider.addEventListener('mouseout', (e) => {
    autoSlide();
});

function clickSlide(a, b) {
    a;

    if (nowSlide == maxImg) {
        nowSlide = 0;
    } else if (nowSlide == -1) {
        nowSlide = maxImg - 1;
    }

    slide[nowSlide].style.transition = 'none'; //delay전에 이미 이동
    slide[nowSlide].style.left = `${b * 100}%`;

    // =============================================

    setTimeout(() => {
        slide[beforeSlide].style.transition = '1s';
        slide[nowSlide].style.transition = '1s';
        slide[beforeSlide].style.left = `${b * -100}%`;
        slide[nowSlide].style.left = 0;

        beforeSlide = nowSlide;
    }, 10);
}
