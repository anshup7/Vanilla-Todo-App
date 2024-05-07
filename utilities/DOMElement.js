import DOMAdapter from "./DOMAdapter.js";
import DOMHelper from "./DOMHelper.js";

export default class Element extends DOMAdapter {
  #dom;
  #element;
  constructor(attributeValue, attributeType = "id") {
    super();
    this.#dom = new DOMHelper();
    switch (attributeType) {
      case "id": {
        this.#element = DOMAdapter.getDOMElementById(attributeValue);
        break;
      }
      default: console.log("TBD");
    }
  }

  addEventListener(onEvent, callback) {
    DOMAdapter.addEventListener(this.#element, onEvent, callback);
  }

  // change this, above add event listener is getting repeated

  addEventListenerOnDOM() {
    return document;
  }

  get DOM() {
    return this.#dom;
  }

  get el() {
    return this.#element;
  }

  get value() {
    return this.el.value;
  }

  get rand() {
    return DOMAdapter.getRandomIdNumber();
  }
}