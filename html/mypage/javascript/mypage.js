'use strict';

function btnMove(targetBtn) {
    if (targetBtn.className === 'btn1_foward') {
        wishlist_ul.style.left = '-102%';
        btn1_back.style.visibility = 'visible';
        btn1_foward.style.visibility = 'hidden';
    } else if (targetBtn.className === 'btn1_back') {
        wishlist_ul.style.left = '0%';
        btn1_back.style.visibility = 'hidden';
        btn1_foward.style.visibility = 'visible';
    } else if (targetBtn.className === 'btn2_foward') {
        recent_ul.style.left = '-102%';
        btn2_back.style.visibility = 'visible';
        btn2_foward.style.visibility = 'hidden';
    } else if (targetBtn.className === 'btn2_back') {
        recent_ul.style.left = '0%';
        btn2_back.style.visibility = 'hidden';
        btn2_foward.style.visibility = 'visible';
    }
}

const my_page = document.querySelector('.my_page'),
    wishlist_ul = my_page.querySelector('.mybox4ul'),
    recent_ul = my_page.querySelector('.mybox5ul'),
    btn1_back = my_page.querySelector('.btn1_back'),
    btn1_foward = my_page.querySelector('.btn1_foward'),
    btn2_back = my_page.querySelector('.btn2_back'),
    btn2_foward = my_page.querySelector('.btn2_foward');

btn1_back.style.visibility = 'hidden';
btn2_back.style.visibility = 'hidden';

my_page.addEventListener('click', (e) => {
    let targetBtn = e.target.closest('a');
    if (!targetBtn) return;
    if (targetBtn.className === 'btn1_back' || targetBtn.className === 'btn1_foward') {
        e.preventDefault();
        btnMove(targetBtn);
    }
    if (targetBtn.className === 'btn2_back' || targetBtn.className === 'btn2_foward') {
        e.preventDefault();
        btnMove(targetBtn);
    }
});
