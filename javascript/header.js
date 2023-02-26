'use strict';
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

// 백스크롤 버튼
const header = document.querySelector('header'); 
header.innerHTML += '<div class="btn_scrollBack"><img src = "https://i.ibb.co/y6v8MhP/backscroll.png" </div>' ;
const btn_scrollBack = document.querySelector('.btn_scrollBack');



window.addEventListener('scroll', () => {
  scrollInvisible(btn_scrollBack, 1, 'visible', 0, 'hidden');
})

btn_scrollBack.addEventListener('click', () => {
const stopScroll = setInterval(() => {
  window.scrollBy(0,-80);

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




//top헤더메뉴 스크롤 내렸을때 없어지고 사라지게 하기

const header_top = document.querySelector('.top');
const header_inner = header_top.querySelector('.inner');
const header_inner_ul = header_inner.querySelector('ul');
const header_top_comment = header_top.querySelector('.comment');
const detail_info = document.querySelector('.detail_info');  // detail_info 블럭상의 div 작동불가 처리

window.addEventListener('wheel', (e) => {
  if (e.target.closest('.detail_info')) {  // detail_info 블럭상의 div 작동불가 처리
    return; 
  }

  let wheel = e.deltaY;
  if(wheel > 0) {
    header_top.style.visibility = 'hidden'
    header_top_comment.style.visibility = 'hidden'
    header_inner_ul.style.visibility = 'hidden'
    header_inner.style.height = '0px'
    header_top.style.padding = '0px'
  } else {
    header_top.style.visibility = 'visible'
    header_top_comment.style.visibility = 'visible'
    header_inner_ul.style.visibility = 'visible'
    header_inner.style.height = '20px'
    header_top.style.padding = '10px'
  }
})
