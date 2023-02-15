'use strict';

//====== 검색창 등장  ====
const search = document.querySelector('.search'),
  search_symbol = search.querySelector('span'),
  search_input = search.querySelector('input');

let clickIdx = 0
search_symbol.addEventListener('click', () => {
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


//====== 백스크롤 버튼 ====
const header = document.querySelector('header'); 
header.innerHTML += '<div class="btn_scrollBack"><img src = "../../image/backscroll.png" </div>'
const btn_scrollBack = header.querySelector('.btn_scrollBack');



window.addEventListener('scroll', () => {
  if(window.scrollY > window.innerHeight / 3) {
    btn_scrollBack.style.opacity = '1';
    btn_scrollBack.style.visibility = 'visible';
  } else {
    btn_scrollBack.style.opacity = '0';
    btn_scrollBack.style.visibility = 'hidden';
  }
})

btn_scrollBack.addEventListener('click', () => {
  const stopScroll = setInterval(() => {
    window.scrollBy(0,-30);

    if(window.scrollY <= 0) clearInterval(stopScroll);
  })
});


