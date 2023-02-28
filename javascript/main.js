'use strict';

//============================
//====== 함수선언 영역  ======
//============================

//스크롤 함수

//men_lady 컨텐츠 영역 교체 함수
let sexuality = 0;

function switchMenLady(target, main_num, section_men, list_men, section_lady, list_lady, btnKind) {
  
  if(target.className === "Men") {
    target.style.color = 'black';
    main_num[1].style.color = '#d6d6d6';
    
    section_men.style.display = 'block'
    section_men.style.left = '0%'
    list_men.style.left = '100%'
    section_lady.style.display = 'none'

    btnKind[1].style.visibility ="visible"
    switchMenUl();
  } else {
    target.style.color = 'black';
    main_num[0].style.color = '#d6d6d6';
    
    section_lady.style.display = 'block'
    section_lady.style.left = '0%'
    list_lady.style.left = '100%'
    section_men.style.display = 'none'

    //레이디 등장할때 첫화면 버튼 visibility 세팅
    btnKind[0].style.visibility ="hidden"
    btnKind[1].style.visibility ="visible"
    switchLadyUl();
  }
};

function switchMenUl() {
  sexuality = 0;
}
function switchLadyUl() {
  sexuality = 1;
}





//============================
//====== 동작문 영역  ======
//============================


//배지 배너 가위표 삭제버튼

const badges = header.querySelector('.badges'),
badge = badges.querySelector('.badge'),
badgeClose = header.querySelector('.badges .badge .close');

badges.addEventListener('click', (e) => {
  let targetEle = e.target.closest('img');

  if(targetEle.className === 'close') {badges.style.display  = 'none'} 
  
})

window.addEventListener('scroll', () => {
  scrollInvisible(badge, 0, 'hidden', 1, 'visible');
})


//item_list 화살표 슬라이더
/*
- 화살표 백은 처음에 안보이게 하기
- 화살표 클릭할때 한번에 5개씩 보이도록 5% 로 설정
*/

//men lady 교체
const main_products1 = document.querySelector('.main_products1'),
main_products1_li = main_products1.querySelectorAll('li a'),

main_products2 = document.querySelector('.main_products2'),
main_products2_li = main_products2.querySelectorAll('li a'),

main_products3 = document.querySelector('.main_products3'),
main_products3_li = main_products3.querySelectorAll('li a'),


sales_div_men = document.querySelector('.sales_men'),
sales_list_men = document.querySelector('.sales_men > ul'),
sales_div_lady = document.querySelector('.sales_lady'),
sales_list_lady = document.querySelector('.sales_lady > ul'),

weather_div_men = document.querySelector('.weather_men'),
weather_list_men = document.querySelector('.weather_men > ul'),
weather_div_lady = document.querySelector('.weather_lady'),
weather_list_lady = document.querySelector('.weather_lady > ul'),

new_div_men = document.querySelector('.new_men'),
new_list_men = document.querySelector('.new_men > ul'),
new_div_lady = document.querySelector('.new_lady'),
new_list_lady = document.querySelector('.new_lady > ul');





main_products1.addEventListener('click', function (e) {
  e.preventDefault();
  let targetLi = e.target.closest('a');
  switchMenLady(targetLi, main_products1_li, sales_div_men, sales_list_men, sales_div_lady, sales_list_lady, sales_btn);
});

main_products2.addEventListener('click', function (e) {
  e.preventDefault();
  let targetLi = e.target.closest('a');
  switchMenLady(targetLi, main_products2_li, weather_div_men, weather_list_men, weather_div_lady, weather_list_lady, weather_btn);
});

main_products3.addEventListener('click', function (e) {
  e.preventDefault();
  let targetLi = e.target.closest('a');
  switchMenLady(targetLi, main_products3_li, new_div_men, new_list_men, new_div_lady, new_list_lady, new_btn);
});


//각 섹션 버튼 좌우 이동 함수

function btnMove(targetBtn, btnKind, targetUl_men, targetUl_lady ) {

  if (sexuality === 0 && targetBtn.className === 'btn_foward') {
    targetUl_men.style.left = '4%';
    btnKind[1].style.visibility = "hidden";
    btnKind[0].style.visibility = "visible";
  } else if (sexuality === 0 && targetBtn.className === 'btn_back') {
    targetUl_men.style.left = '100%'
    btnKind[1].style.visibility = "visible";
    btnKind[0].style.visibility = "hidden";
  } else if (sexuality === 1 && targetBtn.className === 'btn_foward') {
    btnKind[1].style.visibility = "hidden";
    btnKind[0].style.visibility = "visible";
    targetUl_lady.style.left = '4%'
  } else if(sexuality=== 1 && targetBtn.className === 'btn_back') {
    btnKind[1].style.visibility = "visible";
    btnKind[0].style.visibility = "hidden";
    targetUl_lady.style.left = '100%'
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
sales_btn[0].style.visibility = "hidden";
weather_btn[0].style.visibility = "hidden";
new_btn[0].style.visibility = "hidden";


item_container1.addEventListener('click', (e) => {
  let targetBtn_sales = e.target.closest('a');
  if(targetBtn_sales.className === 'btn_foward' || targetBtn_sales.className === 'btn_back') e.preventDefault();
  btnMove(targetBtn_sales, sales_btn, sales_list_men, sales_list_lady);
})


item_container2.addEventListener('click', (e) => {
  let targetBtn_weather = e.target.closest('a');
  if(targetBtn_weather.className === 'btn_foward' || targetBtn_weather.className === 'btn_back') e.preventDefault();
  btnMove(targetBtn_weather, weather_btn, weather_list_men, weather_list_lady);
})

item_container3.addEventListener('click', (e) => {
  let targetBtn_new = e.target.closest('a');
  if(targetBtn_new.className === 'btn_foward' || targetBtn_new.className === 'btn_back') e.preventDefault();
  btnMove(targetBtn_new, new_btn, new_list_men, new_list_lady);
})
  


