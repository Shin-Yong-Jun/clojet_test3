'useStrict';

function selectAll(selectAll) {
  const checkboxes = document.getElementsByName('required');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  })
}