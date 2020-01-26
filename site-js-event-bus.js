// class EventBus {
//   constructor() {
//     console.log('EventBus.constructor() invoked');
//     this._bus = document.createElement('site-event-bus');
//   }

//   register(event, callback) {
//     console.log('EventBus.register().event: ', event);
//     console.log('EventBus.register().callback: ', callback);
//     this._bus.addEventListener(event, callback);
//   }

//   remove(event, callback) {
//     console.log('EventBus.remove().event: ', event);
//     console.log('EventBus.remove().callback: ', callback);
//     this._bus.removeEventListener(event, callback);
//   }

//   fire(event, detail = {}) {
//     console.log('EventBus.fire().event: ', event);
//     console.log('EventBus.fire().detail: ', detail);
//     this._bus.dispatchEvent(new CustomEvent(event, { detail }));
//   }
// }
// var EventBusModule = new EventBus();
// export default EventBusModule;
export default class EventBus {
  constructor() {
    console.log('EventBus.constructor() invoked');
    this._bus = document.createElement('site-event-bus');
  }

  register(event, callback) {
    console.log('EventBus.register().event: ', event);
    console.log('EventBus.register().callback: ', callback);
    this._bus.addEventListener(event, callback);
  }

  remove(event, callback) {
    console.log('EventBus.remove().event: ', event);
    console.log('EventBus.remove().callback: ', callback);
    this._bus.removeEventListener(event, callback);
  }

  fire(event, detail = {}) {
    console.log('EventBus.fire().event: ', event);
    console.log('EventBus.fire().detail: ', detail);
    this._bus.dispatchEvent(new CustomEvent(event, { detail }));
  }
}
