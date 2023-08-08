// const menu = document.getElementById('drawer-menu');
// const toggle = document.getElementById(menu.dataset.menuToggle);

const slidingDrawer = function(
  contentEl, 
  triggerEl, 
  slideFunction, 
  modifyTriggerFunction) {

    this.drawer = contentEl;
    this.trigger = triggerEl;
    this.drawerSlide = slideFunction;
    this.toggleTrigger = modifyTriggerFunction;

};

function drawerSlide() {

  this.drawer.classList.toggle('menu-open');

}

function modDrawerTrigger() {

  this.trigger.classList.toggle('opacity-25');

}

const testMenu = new slidingDrawer(
  document.getElementById('drawer-menu'), 
  document.getElementById('drawer-menu-toggle'), 
  drawerSlide, 
  modDrawerTrigger);

console.dir(testMenu);

testMenu.trigger.addEventListener('click', (event) => {

  testMenu.toggleTrigger();
  testMenu.drawerSlide();

});