/*
  Adapter class to emulate common operations
*/

import Element from "./utilities/DOMElement.js";

const listContainer = new Element("list_container");

const addButton = new Element("add_item_button");

const insertField = new Element("insert_text_field");

// The following is causing memory leaks fix it;

addButton.addEventListener("click", () => {
  console.log("Add event clicked");
  const liNode = listContainer.DOM
    .createElement("li")
    .setAttrbute("id", insertField.value)
    .createTextNode(insertField.value)
    .appendTextNodeChild()
    .node;
  listContainer.el.appendChild(listContainer.DOM.node);

  // Same process as above can be reinstated as the above "domNode" is now added to the DOM. We are just playing with classes.


  const checkBoxNode = listContainer.DOM.createElement("input")
    .setAttrbute("type", "checkbox")
    .setAttrbute("id", `${insertField.value}_checkbox_${listContainer.rand}`)
    .setAttrbute("name", `${insertField.value}_checkbox`)
    .node;

  // these liNode and checkBoxNode are open objects, they should come via the class.
  liNode.appendChild(checkBoxNode);

  liNode.addEventListener("click", (e) => { // this is getting set directly by dom as the liNode is an open reference. The current code structure is not perfectly modular. Beware!! and fix this
    const id = e.target.id;
    const parent = new Element(id.split("_")[0]);
    parent.el.remove(); // if same is added again this is not working check why?
  });
});




/**
 * Design the UML diagram
 * Then code this - end date - 7 May 2024
 */




