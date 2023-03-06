'use strict';

//체크박스 전체선택 기능
function selectAll(selectAll) {
  const checkboxes = document.getElementsByName('product');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  })
}
//====================================================================================
//===================- 체크박스 체크 시, 하단 출력부분 관련 ==========================
//====================================================================================

//상품개수 금액 출력영역 대상 잡기
const price_list = document.querySelector('.price_list'),
  deliveryfee = price_list.querySelector('.deliveryfee'),
  sumTotalPrice = price_list.querySelector('.sumTotalPrice'),
  allCheck = document.getElementById('allCheck'),
  sumproductPrice = price_list.querySelector('.sumproductPrice'),
  amount = price_list.querySelector('.amount');

//상품개수 금액 목록영역 대상 잡기
const tbody = document.querySelector('tbody'),
  td_order_amount = tbody.querySelectorAll('.td_order_amount'),
  order_sum_txt2 = tbody.querySelectorAll('.order_sum_txt2');


// //체크박스 대상 잡기
const product_chkBox = document.getElementsByClassName("product");

// 체크박스 간의 개수, 금액 대상잡기
let amount_count = 0,
  amount_price = 0,
  tot_price = 0;

//선택된 데이터들을 받을 객체 선언
const selectedAr = {
  countData: '',
  finalPrice: '',
}

//금액기호 넣는 함수
function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


//배달비 금액기호 없애기.
let pure_deliveryfee = Number(deliveryfee.textContent.replace(',', ''));


//============================//
/*개별 체크박스 체크할때*/
//============================//
for (let i = 0; i < product_chkBox.length; i++) {

  //금액기호 없애기 
  let pure_sum_txt = order_sum_txt2[i].textContent.replace(',', '');
  
  product_chkBox[i].addEventListener('change', () => {
    //개수워딩 간소화
    let pure_amount = td_order_amount[i].textContent;
    
    //개별추가 배송비값 변수 선언
    let price_with_d = 0;
    
    if (product_chkBox[i].checked) {
      amount_count += Number(pure_amount);
      amount_price += Number(pure_sum_txt);
      
      //개별추가시 통일된 배송비값 단일 추가
      price_with_d = amount_price + pure_deliveryfee; 
      
    } else {
      amount_count -= Number(pure_amount);
      amount_price -= Number(pure_sum_txt);

      //개별삭제시 배송비값 제거
      price_with_d = 0; 
    }

    amount.innerText = `${amount_count}`;
    sumproductPrice.innerText = priceToString(`${amount_price}`);
    selectedAr.countData = amount_count; // set text content to count
    selectedAr.finalPrice = amount_price; // set text content to count

    //총합계 산출
    sumTotalPrice.innerText = priceToString(price_with_d);
  });
}

//============================//
/*전체 체크박스까지 고려함*/
//============================//
allCheck.addEventListener('change', () => {
  
  if (allCheck.checked) {
    amount_count = 0;
    
    for (let i = 0; i < product_chkBox.length; i++) {
      
      //개수워딩 간소화
      let pure_amount = td_order_amount[i].textContent;

      //금액기호 없애기 
      let pure_sum_txt = order_sum_txt2[i].textContent.replace(',', '');

      amount_count += Number(pure_amount);
      amount_price += Number(pure_sum_txt);

      selectedAr.countData = amount_count; // set text content to count
      selectedAr.finalPrice = amount_price; // set text content to count
      product_chkBox[i].checked = true;
    }
  } else {
    amount_count = 0;
    amount_price = 0;
    
    for (let i = 0; i < product_chkBox.length; i++) {
      selectedAr.countData = 0; // set text content to count
      selectedAr.finalPrice = 0; // set text content to count
      product_chkBox[i].checked = false;
    }
  }
  amount.innerText = `${amount_count}`;
  sumproductPrice.innerText = priceToString(`${amount_price}`);
  
  //총합계 산출
  let price_with_d = amount_price + pure_deliveryfee; 
  sumTotalPrice.innerText = priceToString(price_with_d);
  
})

/* 체크박스 다 꺼져있을때 배달비 없애기 */
allCheck.addEventListener('change', () => {
  if(allCheck.checked === false) {
    sumTotalPrice.innerText = 0;
    }
  }
)



//====================================================================================
//===================- 주문변경 관련 모달창 작업 ==========================
//====================================================================================

//모달창 수량변경시 가격변화

const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const countSpan = document.querySelector('.count');
const priceSpan = document.querySelector('.modal_item_detail_price');
const countResultSpan = document.querySelector('.count_box_result');
const finalResultSpan = document.querySelector('.final_modify_result');

let count = parseInt(countSpan.textContent);
const price = parseInt(priceSpan.textContent.replace(',', ''));

minusBtn.addEventListener('click', () => {
  if (count > 1) {
    count--;
    countSpan.textContent = count;
    countResultSpan.textContent = addCommas(count * price);
    finalResultSpan.textContent = addCommas(count * price);
  }
});

plusBtn.addEventListener('click', () => {
  count++;
  countSpan.textContent = count;
  countResultSpan.textContent = addCommas(count * price);
  finalResultSpan.textContent = addCommas(count * price);
});

function addCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
//모달창 종료와 발동
const modal = document.querySelector('.modal'),
modal_exit = modal.querySelector('.modal_exit'),
modal_chk = modal.querySelector('.modal_chk');

const btn_choice = document.querySelectorAll('.btn_choice button');
for (let i = 0; i < btn_choice.length; i++) {
  btn_choice[i].addEventListener('click', () => {
    modal.classList.remove('hidden');
  })
  
}


modal_exit.addEventListener('click', () => {
  modal.classList.add('hidden');
})

modal_chk.addEventListener('click', () => {
  modal.classList.add('hidden');
  //추후 모달창 html 코드를 자동으로 1,2,3 넘버링한 코드대로 작동시켜서 반영되게 하기
    td_order_amount[0].textContent = countSpan.textContent;
    order_sum_txt2[0].textContent = finalResultSpan.textContent;
    
})

//문제사항.
//전체 선택했을 때는 모달창에서 작업한 내용이 반영이 된 금액이 함께 계산되는데 개별 체크에선 안 잡힘.
// 모달창 1, 2, 이렇게 html에 없는 이상 하나로 각각의 아이템 섹션의 개수와 가격을 반영하기엔 무리. 
//개별체크박스들을 클릭하고 난 뒤, 전체 선택 체크를 하면 개별체크박스들의 금액의 두배의 가격이 반영됨.