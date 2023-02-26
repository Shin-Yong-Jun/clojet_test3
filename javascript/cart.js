'use strict';

function selectAll(selectAll) {
  const checkboxes_cart = document.getElementsByName('product');

  checkboxes_cart.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  })
}