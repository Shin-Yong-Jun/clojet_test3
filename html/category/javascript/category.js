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
            <li class="product_list_li">
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
                    </a>
                </div>

                <div class="item_info">
                    <p class="item_name">
                        <a href="">${value.title}</a>
                    </p>
                    <span class="disCount">${value.discount}</span>
                    <del class="price">${String(value.price).replace(
                        /(\d)(?=(?:\d{3})+(?!\d))/g,
                        '$1,',
                    )} 원</del>
                    <p class="price">
                        <strong>${String(value.buy_price).replace(
                            /(\d)(?=(?:\d{3})+(?!\d))/g,
                            '$1,',
                        )} 원</strong>
                    </p>
                </div>
            </li>
        `;
        }
    });
}
show_list();

/****************************************************************************/
// 상품 리스트 수량 체크
function show_product_list_li_length() {
    const product_list_li =
            product_list_ul.querySelectorAll('.product_list_li'),
        product_list_li_length = main.querySelector('.product_list_li_length');

    product_list_li_length.textContent = `${product_list_li.length}개의 상품`;
}
show_product_list_li_length();

/****************************************************************************/
// 상품 컬러 클릭 이벤트
const color = main.querySelector('.color'),
    side_bar_color = color.querySelector('.side_bar_color'),
    side_bar_color_li = side_bar_color.querySelectorAll('li');
let colorArrrr = [];

side_bar_color.addEventListener('click', (e) => {
    function show_color(filter_target, aRpush) {
        colorArrrr = colorArrrr.filter((value) => value != filter_target);
        product_list_ul.innerHTML = '';
        targetE.classList.toggle('checked');
        aRpush;
        colorArrrr.forEach((value) => {
            show_list(value);
            show_product_list_li_length();
        });
    }

    let targetE = e.target.closest('.color li');

    if (!targetE) return;
    if (targetE.classList.contains('checked')) {
        if (colorArrrr.length <= 1) {
            colorArrrr = [''];
        }
        // 공통
        show_color(targetE.dataset.color);
    } else {
        // 공통
        show_color([''], colorArrrr.push(targetE.dataset.color));
    }
});
