const icon_search = document.querySelector('.icon_search'),
search_symbol = icon_search.querySelector('span'),
search_input = icon_search.querySelector('input');

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