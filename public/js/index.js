const PubSub = {

  events: {},

  subscribe: function(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },

  unsubscribe: function(eventName, fn) {
    if(this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        subscriber => subscriber !== fn);
    }
  },

  publish: function(eventName, data) {
    if(this.events[eventName]) {
      this.events[eventName].forEach(subscriber => {
        subscriber(data)
      });
    }
  }

};

const SlidingDrawer = function(contentEl, slideFunction) {
  this.drawer = contentEl;
  this.drawerSlide = slideFunction;
};

const DrawerTrigger = function(triggerEl, modTriggerFn) {
  this.trigger = triggerEl;
  this.modTrigger = modTriggerFn;
};

const testMenu = new SlidingDrawer(
  document.getElementById('drawer-menu'),
  drawerSlide
);

const testTrigger = new DrawerTrigger(
  document.getElementById('drawer-menu-toggle'), 
  modDrawerTrigger
);

// Subscribing the drawerSlide method to the event
// It has to have a bound this because of how it gets called
PubSub.subscribe('testTriggerClicked', drawerSlide.bind(testMenu));

function drawerSlide() {

  this.drawer.classList.toggle('menu-open');

}

function modDrawerTrigger() {

  this.trigger.classList.toggle('opacity-25');

}

testTrigger.trigger.addEventListener('click', () => {
  PubSub.publish('testTriggerClicked');
});


// const slidingDrawer = function(
//   contentEl, 
//   triggerEl, 
//   slideFunction, 
//   modifyTriggerFunction) {

//     this.drawer = contentEl;
//     this.trigger = triggerEl;
//     this.drawerSlide = slideFunction;
//     this.toggleTrigger = modifyTriggerFunction;

// };

// const testMenu = new slidingDrawer(
//   document.getElementById('drawer-menu'), 
//   document.getElementById('drawer-menu-toggle'), 
//   drawerSlide, 
//   modDrawerTrigger);

// console.dir(testMenu);

// testMenu.trigger.addEventListener('click', (event) => {

//   testMenu.toggleTrigger();
//   testMenu.drawerSlide();

// });