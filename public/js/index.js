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

const SlidingDrawer = function(contentEl) {
  this.drawer = contentEl;
};

const DrawerTrigger = function(triggerEl, modTriggerFn) {
  this.trigger = triggerEl;
  this.modTrigger = modTriggerFn;
};

const testMenu = new SlidingDrawer(
  document.getElementById('drawer-menu')
);

const testTrigger = new DrawerTrigger(
  document.getElementById('drawer-menu-toggle'), 
  modDrawerTrigger
);

// Subscribing the drawerSlide method to the event
// This is a more common way to bind, creating a this context on the fly
// The only thing is it is wonky with an object, better with an el
PubSub.subscribe('testTriggerClicked', drawerSlide.bind({ element: testMenu }));

function drawerSlide() {

  // This is too specific to the testMenu object
  // Would be better if: this.element.classList.toggle();
  this.element.drawer.classList.toggle('menu-open');

}

function modDrawerTrigger() {

  this.trigger.classList.toggle('opacity-25');

}

testTrigger.trigger.addEventListener('click', () => {
  PubSub.publish('testTriggerClicked');
});