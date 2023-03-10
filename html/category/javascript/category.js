import info from './data.js';
('use strict');

const main = document.querySelector('main');
/****************************************************************************/
// 상품 만들기
const product_list_ul = main.querySelector('.product_list_ul');

function show_list(search = '') {
    info.forEach((value, index) => {
        if (search === '' || value.color.includes(search)) {
            product_list_ul.innerHTML += `
            <li class="product_list_li" data-page="${index}">
                <div class="item_img">
                    <a href="./detail_page.html">
                        <img
                        src=${value.thum_imgAr[1]}
                        alt="thum_1"
                        />
                        <img
                        src=${value.thum_imgAr[0]}
                            alt="thum"
                        />
                        <div style="background-color: ${value.color};"></div>
                    </a>
                </div>

                <div class="item_info">
                    <p class="item_name">
                        <a href="">${value.title}</a>
                    </p>
                    <span class="disCount">${value.discount}</span>
                    <del class="price">${String(value.price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')} 원</del>
                    <p class="price">
                        <strong>${String(value.buy_price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')} 원</strong>
                    </p>
                </div>
            </li>
        `;
        }
    });
}
show_list();

product_list_ul.addEventListener('click', (e) => {
    let targetE = e.target.closest('li').dataset.page;
    sessionStorage.setItem('page_key', targetE);
});

/****************************************************************************/
// 상품 리스트 수량 체크
function show_product_list_li_length() {
    const product_list_li = product_list_ul.querySelectorAll('.product_list_li'),
        product_list_li_length = main.querySelector('.product_list_li_length');

    product_list_li_length.textContent = `${product_list_li.length}개의 상품`;
}
show_product_list_li_length();

/****************************************************************************/
// 상품 컬러 클릭 이벤트
const color = main.querySelector('.color'),
    side_bar_color = color.querySelector('.side_bar_color'),
    side_bar_color_li = side_bar_color.querySelectorAll('li');
let colorAr = [];

side_bar_color.addEventListener('click', (e) => {
    function show_color(filter_target, aRpush) {
        colorAr = colorAr.filter((value) => value != filter_target);
        product_list_ul.innerHTML = '';
        targetE.classList.toggle('checked');
        aRpush;
        colorAr.forEach((value) => {
            show_list(value);
            show_product_list_li_length();
        });
    }

    let targetE = e.target.closest('.color li');
    if (!targetE) return;

    if (targetE.classList.contains('checked')) {
        if (colorAr.length <= 1) {
            colorAr = [''];
        }
        // 공통
        show_color(targetE.dataset.color);
    } else {
        // 공통
        show_color([''], colorAr.push(targetE.dataset.color));
    }
});

/***********************************************************************/
// 상품 금액별 소팅
const item_list = main.querySelector('.item_list'),
    list_sort = item_list.querySelector('.list_sort'),
    [high_price_btn, low_price_btn] = list_sort.querySelectorAll('label'),
    [high_price_symbols, low_price_symbols] = list_sort.querySelectorAll('.material-symbols-outlined');

list_sort.addEventListener('click', (e) => {
    // 컬러선택 초기화
    side_bar_color_li.forEach((value) => {
        value.classList.remove('checked');
    });
    colorAr = [];

    //상품리스트 소팅
    let targetE = e.target.closest('label');

    function btn_change(now_btn, now_symbols, before_btn, before_symbols) {
        show_list();
        show_product_list_li_length();
        now_btn.style.fontWeight = 'bold';
        before_btn.style.fontWeight = 'normal';
        now_symbols.textContent = 'task_alt';
        now_symbols.style.color = 'goldenrod';
        before_symbols.textContent = 'circle';
        before_symbols.style.color = 'black';
    }

    if (targetE.className == 'low_price') {
        product_list_ul.innerHTML = '';
        info.sort((a, b) => a.price - b.price);
        btn_change(low_price_btn, low_price_symbols, high_price_btn, high_price_symbols);
    } else {
        product_list_ul.innerHTML = '';
        info.sort((a, b) => b.price - a.price);
        btn_change(high_price_btn, high_price_symbols, low_price_btn, low_price_symbols);
    }
});
