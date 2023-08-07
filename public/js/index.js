const menu = document.getElementById('drawer-menu');
const toggle = document.getElementById(menu.dataset.menuToggle);

console.dir(menu);
console.dir(toggle);

toggle.addEventListener('click', (event) => {

  event.currentTarget.classList.toggle('opacity-25');
  menu.classList.toggle('menu-open');

});