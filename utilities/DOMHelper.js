export default class DOMHelper {
  #domNode;
  #domTextNode;
  createElement(elementType, {attributes}) {
    this.#domNode = document.createElement(elementType);
    attributes.reduce((acc, [attributeName, attributeValue]) => 
      acc.setAttrbute(attributeName, attributeValue), this);
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