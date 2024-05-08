/*
  Adapter class to emulate common operations
*/

import Element from "./utilities/DOMElement.js";

const listContainer = new Element("list_container");

const addButton = new Element("add_item_button");

const removeButton = new Element("remove_item_button");


const insertField = new Element("insert_text_field");



addButton.el.addEventListener("click", () => {
  console.log("Add event clicked");
  // since the node is created by element class, DOM will contain reference to created Node's wrapper class for helper. i.e this.#element == this.DOM.node in the Element class. 
  let liNode = new Element(insertField.value, "id", "li");
  const DOMLiNode = liNode.DOM.createTextNode(insertField.value).appendTextNodeChild().node;
  listContainer.el.appendChild(DOMLiNode);
  // Same process as above can be reinstated as the above "domNode" is now added to the DOM. We are just playing with classes.

  let checkBoxNode = new Element(`${insertField.value}_checkbox_${liNode.rand}`, "id", "input");
  checkBoxNode.DOM.setAttrbute("type", "checkbox").setAttrbute("name", `${insertField.value}_checkbox`);

  // these liNode and checkBoxNode are open objects, they should come via the class.
  liNode.el.appendChild(checkBoxNode.el);

  console.log(liNode.el, liNode.DOM.node);

  // liNode.el.addEventListener("click", (event) => listNodeRemoveListener(event, liNode))

  /**
   * Or the following with more UX friendly way
   */

  liNode.el.addEventListener("click", (e) => liNode.addForRemoval())
});

removeButton.el.addEventListener("click", removeButton.removeDOMNodes)






/**
 * Design the UML diagram
 * Then code this - end date - 7 May 2024
 */




