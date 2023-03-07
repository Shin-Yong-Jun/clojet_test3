'useStrict';


// 모든약관 동의 체크박스 함수 및 동작문
function selectAll(selectAll) {
  const checkboxes = document.getElementsByName('required');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  })
}


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



//약관 전문보기 동작문


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


// 비밀번호 영문숫자조합 8자리 이상
const passwordInput = document.getElementById("pw"),
passwordInput_chk = document.getElementById("pw_chk"),
idInput = document.getElementById("id");

passwordInput.addEventListener("blur", function() {
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,}$/;
  const value = this.value.trim(); // 입력값의 앞뒤 공백을 제거해야 빈공백일때 alert 등장 방어
  if (value && !passwordRegex.test(value)) { // 입력값이 있을 때만 정규표현식 검증
    alert("비밀번호는 영문대문자와 소문자, 숫자조합의 8자리 이상이어야 합니다.");
    this.value = "";
  }
});


// 비밀번호 확인 일치 관련 여부
passwordInput_chk.addEventListener("blur", function() {
  if(passwordInput_chk.value !== passwordInput.value) {
    alert("비밀번호 입력란과 확인란이 일치하지 않습니다.");
    passwordInput_chk.value = "";
    idInput.focus();
  }
})