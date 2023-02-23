import info from './data.js';
('use strict');

// 썸네일 이미지 리스트 생성
const main = document.querySelector('main'),
    detail_thum = main.querySelector('.detail_thum'),
    thum_main_img = detail_thum.querySelector('.thum img'),
    thum_list = detail_thum.querySelector('.thum_list');

function show_thum() {
    info[0].thum_imgAr.forEach((value, index) => {
        const list = document.createElement('li');
        const a_tag = document.createElement('a');
        const img = document.createElement('img');
        a_tag.setAttribute('href', `#`);
        img.setAttribute('src', `${value}`);
        img.setAttribute('alt', `thum_img_${[index]}`);
        img.setAttribute('data-no', `${[index]}`);

        thum_list.append(list);
        list.append(a_tag);
        a_tag.append(img);
    });
}
show_thum();

// 썸네일 현재 이미지 변경 / 알림
const thum_list_li = thum_list.querySelectorAll('li');
let before_thum = 0;
thum_main_img.setAttribute('src', info[0].thum_imgAr[0]);
thum_list_li[0].classList.add('show_now');

thum_list.addEventListener('mouseover', (e) => {
    e.preventDefault();
    let targetE = e.target.closest('img');
    if (!targetE) return;

    let now_thum = targetE.getAttribute('data-no');
    thum_main_img.setAttribute('src', targetE.getAttribute('src'));
    thum_list_li[before_thum].classList.remove('show_now');
    thum_list_li[now_thum].classList.add('show_now');
    before_thum = now_thum;
});
/****************************************************************************/
// 상품정보 생성
// 제품명생성
const detail_info = main.querySelector('.detail_info'); // 보류1

//사이즈생성
const size = detail_info.querySelector('.size'),
    size_list = size.querySelector('.size_list');

function show_size() {
    info[0].size.forEach((value, index) => {
        const list = document.createElement('li');
        const a_tag = document.createElement('a');
        a_tag.href = '#';
        a_tag.dataset.size = index;
        a_tag.textContent = value;
        size_list.append(list);
        list.append(a_tag);
    });
}
show_size();

// 구매체크칸 생성
const item_check = detail_info.querySelector('.item_check');
let count_ = 1;

function show_item_check() {
    info[0].size.forEach((value, index) => {
        item_check.innerHTML += `
            <div class="item_check_size size${value} hidden">
                <strong>Size _ ${value}</strong>

                <div class="count_box">
                    <a href="#" class="minus_btn">-</a>
                    <input type="text" class="count count_${index}" value="0" readonly/>
                    <a href="#"class="plus_btn">+</a>
                </div>
                <a href="#">X</a>
            </div>
        `;
    });
}
show_item_check();

// 구매수량증감

const count_box = item_check.querySelectorAll('.count_box'),
    count = item_check.querySelectorAll('.count');
const input = item_check.querySelector('input');
let tot_count = 0;

item_check.addEventListener('click', (e) => {
    let targetE = e.target;
    if (targetE.className == 'minus_btn') {
        if (count_ == 0) return;
        input.value = `${--count_}`;
        alert(input.value);
        item_box_price1(--tot_count);
    } else if (targetE.className == 'plus_btn') {
        input.value = `${++count_}`;
        item_box_price1(++tot_count);
    }
});

// 구매체크칸 활성화
// 사이즈버튼체크 활성화
const item_check_size = item_check.querySelectorAll('.item_check_size');
const size_list_a = size_list.querySelectorAll('a');
let before_size_list_a = 0;

size_list.addEventListener('click', (e) => {
    e.preventDefault();
    let targetE = e.target.closest('a');
    if (!targetE) return;

    let now_size_list_a = targetE.getAttribute('data-size');
    size_list_a[before_size_list_a].classList.remove('check');
    size_list_a[now_size_list_a].classList.add('check');
    before_size_list_a = now_size_list_a;

    item_check_size[targetE.dataset.size].classList.remove('hidden');
    if (count[now_size_list_a].value == 0) {
        count[now_size_list_a].value = 1;
        item_box_price1(++tot_count);
    }
});

//
const item_box = detail_info.querySelector('.item_box'),
    item_box_price = item_box.querySelector('.price');

function item_box_price1(totcount) {
    totcount;
    item_box_price.innerHTML = `<strong>${String(
        tot_count * info[0].buy_price,
    ).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')} 원 |</strong>`;
}
item_box_price1();

/****************************************************************************/
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
