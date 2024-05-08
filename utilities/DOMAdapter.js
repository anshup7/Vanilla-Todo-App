export default class DOMAdapter {

  static #cacheDOMReference = new Map();
  static #eventListenerCache = new Map();
  static #documentItemsToRemove = [];
  static getDOMElementById(id) {
    if(DOMAdapter.#cacheDOMReference.has(id)) {
      return DOMAdapter.#cacheDOMReference.get(id);
    }
    DOMAdapter.#cacheDOMReference.set(id, document.getElementById(id));
    return DOMAdapter.#cacheDOMReference.get(id);
  }

  // BUG supports only one event listener, Fix it
  static addEventListener(element, event, callback) {
    const listener = element.addEventListener(event, callback);
    DOMAdapter.#eventListenerCache.set(element, listener);
  }

  // removal on an specific event is TBD
  static removeAllEventListeners(element) {
    DOMAdapter.#eventListenerCache.get(element).removeEventListener();
    DOMAdapter.#eventListenerCache.get(element).delete();
  }

  static getRandomIdNumber() {
    return (Math.random() * 20).toFixed(2);
  }

  static set itemsToRemove(node) {
    DOMAdapter.#documentItemsToRemove.push(node);
  }

  static get itemsToRemove() {
    return DOMAdapter.#documentItemsToRemove;
  }

  static resetItemsToRemove() { // use cautiously
    DOMAdapter.#documentItemsToRemove = [];
  }

}