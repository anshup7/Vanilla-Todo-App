export default class DOMHelper {
  #domNode;
  #domTextNode;
  createElement(elementType) {
    this.#domNode = document.createElement(elementType);
    return this;
  }

  createTextNode(value) {
    this.#domTextNode = document.createTextNode(value);
    return this;
  }

  setAttrbute(attributeName, attributeValue) {
    this.#domNode.setAttribute(attributeName, attributeValue)
    return this;
  }

  appendTextNodeChild() {
    this.#domNode.appendChild(this.#domTextNode);
    return this;
  }

  get node() {
    return this.#domNode;
  }
}