'useStrict';

//================================================
// 함수

//약관 보기 관련 함수

function expandOrNot(viewBox, expandNum){
  if(expandNum){
    signupbox.style.height = `${signupbox.clientHeight - 200}px`
    viewBox.style.display = 'none'
    expandNum = false;

  } else {
    signupbox.style.height = `${signupbox.clientHeight + 200}px`
    viewBox.style.display = 'block'
    expandNum = true;
  }
  return expandNum
}




//================================================




// 모든약관 동의 체크박스
function selectAll(selectAll) {
  const checkboxes = document.getElementsByName('required');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  })
}

//약관 전문보기 


const signupbox = document.querySelector('.signupbox'),
account_agreebox = signupbox.querySelector('.account_agreebox'),
account_checkbox = account_agreebox.querySelectorAll('.account_checkbox'),
account_agreement_view =account_agreebox.querySelectorAll('.agreement_view');


let expand0 = false;
let expand1 = false;
let expand2 = false;

account_checkbox[0].addEventListener('click', (e) => {
  let targetA = e.target.closest('a');
  if (targetA.className === "infolink") {
    e.preventDefault();
    expand0 = expandOrNot(account_agreement_view[0], expand0);
  }
})

account_checkbox[1].addEventListener('click', (e) => {
  let targetA = e.target.closest('a');
  if (targetA.className === "infolink") {
    e.preventDefault();
    expand1 = expandOrNot(account_agreement_view[1], expand1);
  }
})

account_checkbox[2].addEventListener('click', (e) => {
  let targetA = e.target.closest('a');
  if (targetA.className === "infolink") {
    e.preventDefault();
    expand2 = expandOrNot(account_agreement_view[2], expand2);
  }
})
