const search = document.querySelector('.search'),
search_symbol = search.querySelector('span'),
search_input = search.querySelector('input');

let clickIdx = 0
search_symbol.addEventListener('click', () => {
  clickIdx = clickIdx + 1; 
  search_input.style.opacity = '1';
  search_input.style.visibility = 'visible';
  
  if(clickIdx % 2 === 0) {
    search_input.style.opacity = '0';
    search_input.style.visibility = 'hidden';
  }
})