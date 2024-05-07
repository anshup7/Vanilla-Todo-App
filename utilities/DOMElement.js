import DOMAdapter from "./DOMAdapter.js";
import DOMHelper from "./DOMHelper.js";

export default class Element extends DOMAdapter {
  #dom;
  #element;
  constructor(attributeValue, attributeType = "id", elementName="") {
    super();
    this.#dom = new DOMHelper();
    switch (attributeType) {
      case "id": {
        this.#element = DOMAdapter.getDOMElementById(attributeValue);
        if(!this.#element) {
          this.createElement(elementName, {
            attributes: [
             [ attributeType, // equivalent to attributeName
              attributeValue]
            ]
          })
        }
        break;
      }
      default: console.log("TBD");
    }
  }

  createElement(element, {attributes=[]}) {
    if(!element) {
      throw new Error("Since element name is not passed and element is not present, can't create. Please create the element with createElement method");
    } else {
      // the object container for this.#element will be singleton for every node
      // Don't track children with helper this reference
      this.#element = this.DOM.createElement(element, {attributes}).node;
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