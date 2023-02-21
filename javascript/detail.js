'use strict';
// 이미지리스트
const thum_img = [
    '../detail/img/Preview/0.jpg',
    '../detail/img/Preview/1.jpg',
    '../detail/img/Preview/2.jpg',
    '../detail/img/Preview/3.jpg',
    '../detail/img/Preview/4.jpg',
    '../detail/img/Preview/5.jpg',
    '../detail/img/Preview/6.jpg',
];

// 썸네일 이미지 리스트 생성
const main = document.querySelector('main'),
    detail_thum = main.querySelector('.detail_thum'),
    thum_main_img = detail_thum.querySelector('.thum img'),
    thum_list = detail_thum.querySelector('.thum_list');

function show_thum() {
    for (let i = 0; i < thum_img.length; i++) {
        const list = document.createElement('li');
        const a_tag = document.createElement('a');
        const img = document.createElement('img');
        a_tag.setAttribute('href', `#`);
        img.setAttribute('src', `${thum_img[i]}`);
        img.setAttribute('alt', `thum_img_${[i]}`);
        img.setAttribute('data-no', `${[i]}`);

        thum_list.append(list);
        list.append(a_tag);
        a_tag.append(img);
    }
}
show_thum();

// 썸네일 현재 이미지 변경 / 알림
const thum_list_li = thum_list.querySelectorAll('li');
let before = 0;

thum_list.addEventListener('mouseover', (e) => {
    e.preventDefault();
    let targetE = e.target.closest('img');
    if (!targetE) return;

    let now = targetE.getAttribute('data-no');
    thum_main_img.setAttribute('src', targetE.getAttribute('src'));
    thum_list_li[before].classList.remove('show_now');
    thum_list_li[now].classList.add('show_now');
    before = now;
});

// 모달창
const detail_item_sub_info = document.querySelector('.detail_item_sub_info'),
    modal = document.querySelector('.modal'),
    closebutton = modal.querySelector('button');

detail_item_sub_info.addEventListener('click', (e) => {
    let targetE = e.target.closest('a');
    if (!targetE) return;
    modal.classList.remove('hidden');
});

closebutton.addEventListener('click', () => {
    modal.classList.add('hidden');
});
