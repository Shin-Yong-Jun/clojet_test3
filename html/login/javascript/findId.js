'use strict';

const rad_findIdEmail = document.getElementById('rad_findIdEmail');
const rad_findIdphone = document.getElementById('rad_findIdphone');
const findId_input = document.querySelector('.findId_input');
const findId_input_phoneNum = document.querySelector('.findId_input_phoneNum');

findId_input_phoneNum.style.display = 'none';

rad_findIdEmail.onclick = function() {
  showInput('findId_input');
}

rad_findIdphone.onclick = function() {
  showInput('findId_input_phoneNum');
}

function showInput(inputId) {
  if (inputId === 'findId_input') {
    findId_input.style.display = 'block';
    findId_input_phoneNum.style.display = 'none';
  } else if (inputId === 'findId_input_phoneNum') {
    findId_input.style.display = 'none';
    findId_input_phoneNum.style.display = 'block';
  }
}

