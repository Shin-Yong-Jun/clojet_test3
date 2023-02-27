import info from './data.js';
('use strict');
/****************************************************************************/

const main = document.querySelector('main'),
    product_list_ul = main.querySelector('.product_list_ul');

function show_list(search = '') {
    product_list_ul.innerHTML = '';

    info.forEach((value, index) => {
        const colorAr = value.color;
        colorAr.forEach((colorArr) => {
            if (value.color.includes(search)) {
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
                        <span class="material-symbols-outlined"
                            >favorite</span
                        >
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
    });
}
show_list('gray');
