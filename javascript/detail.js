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

function show_item_check() {
    info[0].size.forEach((value, index) => {
        item_check.innerHTML += `
            <div class="item_check_size size${value} hidden">
                <strong>Size _ ${value}</strong>

                <div class="count_box">
                    <a href="#" class="minus_btn">-</a>
                    <span class="count" data-total="0">0</span>
                    <a href="#" class="plus_btn">+</a>
                </div>
            </div>
        `;
    });
}
show_item_check();

// 구매수량증감
const counters = document.querySelectorAll('.count_box');

let total = 0;

counters.forEach((counter) => {
    const minus_btn = counter.querySelector('.minus_btn');
    const plus_btn = counter.querySelector('.plus_btn');
    const count = counter.querySelector('.count');
    let count_value = 1;

    minus_btn.addEventListener('click', () => {
        if (count_value <= 1) return;
        count_value--;
        count.textContent = count_value;
        count.dataset.total = count_value;
        --total;
        show_box_price(total);
    });

    plus_btn.addEventListener('click', () => {
        count_value++;
        count.textContent = count_value;
        count.dataset.total = count_value;
        ++total;
        show_box_price(total);
    });
});

const item_check_size = item_check.querySelectorAll('.item_check_size');
const size_list_a = size_list.querySelectorAll('a');
let before_size_list_a = 0;

size_list.addEventListener('click', (e) => {
    e.preventDefault();
    let targetE = e.target.closest('a');
    const count = item_check_size[targetE.dataset.size].querySelector('.count');
    if (!(targetE.className == 'check')) {
        let now_size_list_a = targetE.getAttribute('data-size');
        size_list_a[now_size_list_a].classList.add('check');
        before_size_list_a = now_size_list_a;

        item_check_size[targetE.dataset.size].classList.remove('hidden');
        ++total;
        show_box_price(total);

        let value = Number(count.textContent);
        count.textContent = ++value;
        count.dataset.total = value;
    } else {
        item_check_size[targetE.dataset.size].classList.add('hidden');
        size_list_a[targetE.dataset.size].classList.remove('check');
        let value = Number(count.textContent);

        --total;
        show_box_price(total);

        count.textContent = 0;
        count.dataset.total = 0;

        total -= --value;
        show_box_price(total);
    }
});

// 총 금액 생성
const item_box = detail_info.querySelector('.item_box'),
    item_box_price = item_box.querySelector('.price');

function show_box_price(total) {
    total;
    item_box_price.innerHTML = `<strong>${String(
        total * info[0].buy_price,
    ).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')} 원 |</strong>`;
}
show_box_price(total);
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

/****************************************************************************/
// 구매확정(구매하기,장바구니)

const shoping_box = document.querySelector('.shoping_box');

shoping_box.addEventListener('click', (e) => {
    if (total == 0) {
        e.preventDefault();
        alert('구매하실 상품을 선택해주세요!');
    }
});
