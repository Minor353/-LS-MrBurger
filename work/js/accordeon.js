var item = document.getElementsByClassName('accordeon__item');

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener('click', function(el) {
    
    el.currentTarget.classList.toggle('accordeon__item--active');
    
    for (let i = 0; i < item.length; i++) {
      if (item[i] !== el.currentTarget && item[i].className === "accordeon__item accordeon__item--active") {
        item[i].classList.remove('accordeon__item--active');
      }
    }
  });
};