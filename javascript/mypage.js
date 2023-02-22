'use strict';

function btnMove(targetBtn) {

  if(targetBtn.className === 'btn1_foward')
    wishlist_ul.style.left = '-102%'
  if(targetBtn.className === 'btn1_back')
    wishlist_ul.style.left = '0%'
  if(targetBtn.className === 'btn2_foward')
    recent_ul.style.left = '-102%'
  if(targetBtn.className === 'btn2_back')
    recent_ul.style.left = '0%'
}


const my_page = document.querySelector('.my_page'),
wishlist_ul = my_page.querySelector('.mybox4ul'),
recent_ul = my_page.querySelector('.mybox5ul');


my_page.addEventListener('click', (e) => {
  let targetBtn = e.target.closest('a');
  if(targetBtn.className === 'btn1_back' || targetBtn.className === 'btn1_foward') {
    e.preventDefault();
    btnMove(targetBtn);
  }
  if(targetBtn.className === 'btn2_back' || targetBtn.className === 'btn2_foward') {
    e.preventDefault();
    btnMove(targetBtn);
  }
})