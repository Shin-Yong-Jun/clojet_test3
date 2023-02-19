'use strict';

//============================
//====== 함수선언 영역  ======
//============================

//스크롤 함수

function scrollInvisible(Element, opacity1,visibility1, opacity2, visibility2) {
  if(window.scrollY > window.innerHeight / 3) {
    Element.style.opacity = `${opacity1}`;
    Element.style.visibility = `${visibility1}`;
  } else {
    Element.style.opacity = `${opacity2}`;
    Element.style.visibility = `${visibility2}`;
  }
}

//men_lady 컨텐츠 영역 교체 함수
let sexual = 0;

function switchMenLady(target, main_num, section_men, list_men, section_lady, list_lady) {
  
  if(target.className === "Men") {
    target.style.color = 'black';
    main_num[1].style.color = '#d6d6d6';
    
    section_men.style.display = 'block'
    section_men.style.left = '0%'
    list_men.style.left = '100%'
    section_lady.style.display = 'none'
    switchMenUl();
  } else {
    target.style.color = 'black';
    main_num[0].style.color = '#d6d6d6';
    
    section_lady.style.display = 'block'
    section_lady.style.left = '0%'
    list_lady.style.left = '100%'
    section_men.style.display = 'none'
    switchLadyUl();
  }
};

function switchMenUl() {
  sexual = 0;
  console.log(sexual);
}
function switchLadyUl() {
  sexual = 1;
  console.log(sexual);
}

//각 섹션 버튼 좌우 이동 함수

function btnMove(targetBtn, btnKind, targetUl_men, targetUl_lady ) {

if (sexual === 0 && targetBtn.className === 'btn_foward') {
  btnKind[0].classList.remove('nonVisible');
  btnKind[1].classList.add('nonVisible');
  targetUl_men.style.left = '4%'
} else if (sexual === 0 && targetBtn.className === 'btn_back') {
  btnKind[0].classList.add('nonVisible');
  btnKind[1].classList.remove('nonVisible');
  targetUl_men.style.left = '100%'
} else if (sexual !== 0 && targetBtn.className === 'btn_foward') {
  btnKind[0].classList.remove('nonVisible');
  btnKind[1].classList.add('nonVisible');
  targetUl_lady.style.left = '4%'
} else {
  btnKind[0].classList.add('nonVisible');
  btnKind[1].classList.remove('nonVisible');
  targetUl_lady.style.left = '100%'
}
}




//============================
//====== 동작문 영역  ======
//============================



// 백스크롤 버튼
const header = document.querySelector('header'); 
header.innerHTML += '<div class="btn_scrollBack"><img src = "../../image/backscroll.png" </div>' ;
const btn_scrollBack = document.querySelector('.btn_scrollBack');



window.addEventListener('scroll', () => {
  scrollInvisible(btn_scrollBack, 1, 'visible', 0, 'hidden');
})

btn_scrollBack.addEventListener('click', () => {
const stopScroll = setInterval(() => {
  window.scrollBy(0,-30);

  if(window.scrollY <= 0) clearInterval(stopScroll);
})
});

//검색창 등장  
const search = document.querySelector('.search'),
search_symbol = search.querySelector('span'),
search_input = search.querySelector('input');


let clickIdx = 0

search_symbol.addEventListener('click', (e) => {
  e.preventDefault();
  
  clickIdx = clickIdx + 1;
  search_input.style.opacity = '1';
  search_input.style.visibility = 'visible';
  search_input.style.width = '180px'
  
  if (clickIdx % 2 === 0) {
    search_input.style.opacity = '0';
    search_input.style.visibility = 'hidden';
    search_input.style.width = '0px'
  }
});



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
  switchMenLady(targetLi, main_products1_li, sales_div_men, sales_list_men, sales_div_lady, sales_list_lady);
});

main_products2.addEventListener('click', function (e) {
  e.preventDefault();
  let targetLi = e.target.closest('a');
  switchMenLady(targetLi, main_products2_li, weather_div_men, weather_list_men, weather_div_lady, weather_list_lady);
});

main_products3.addEventListener('click', function (e) {
  e.preventDefault();
  let targetLi = e.target.closest('a');
  switchMenLady(targetLi, main_products3_li, new_div_men, new_list_men, new_div_lady, new_list_lady);
});


//item_list 화살표 슬라이더

const item_container1 = document.querySelector('.item_container1'),
sales_btn = item_container1.getElementsByTagName('a'),
item_container2 = document.querySelector('.item_container2'),
weather_btn = item_container2.getElementsByTagName('a'),
item_container3 = document.querySelector('.item_container3'),
new_btn = item_container3.getElementsByTagName('a');

item_container1.addEventListener('click', (e) => {
  e.preventDefault();
  let targetBtn_sales = e.target.closest('a');
  btnMove(targetBtn_sales, sales_btn, sales_list_men, sales_list_lady);
})


item_container2.addEventListener('click', (e) => {
  e.preventDefault();
  let targetBtn_weather = e.target.closest('a');
  console.log(sexual);
  btnMove(targetBtn_weather, weather_btn, weather_list_men, weather_list_lady);
})

item_container3.addEventListener('click', (e) => {
  e.preventDefault();
  let targetBtn_new = e.target.closest('a');
  console.log(sexual);
  btnMove(targetBtn_new, new_btn, new_list_men, new_list_lady);
})
  



// 멘 레이디를 클릭하면 각각 ul 을 초기상태로 돌리고 
// 방향키가 맨 혹은 레이디로 대상을 바꾼다.