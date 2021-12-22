"use strict";
function renderSJDON(elements, root) {
    clearNode(root);
    root.appendChild(render(elements));
}

function clearNode(parent) {
    while (parent.lastChild) { parent.removeChild(parent.lastChild); }
}

function render(element) {
    let node = document.createElement(element[0]);
    for (let i = 1; i < element.length; i++) {
        if (Array.isArray(element[i])) {
            node.appendChild(render(element[i]));
        } else if (typeof element[i] == "string") {
            node.textContent = element[i];
        } else {
            if (typeof element[i] == "object") {
                for (let attr in element[i]) {
                    node.setAttribute(attr, element[i][attr]);
                }
            }
        }
    }
    return node;
}

function elt(type, attrs, ...children) {
    let node = document.createElement(type);
    for (let a in attrs) {
      node.setAttribute(a, attrs[a]);
  }
  for (let child of children) {
    if (typeof child != "string") {
      node.appendChild(child);
    } else {
      node.appendChild(document.createTextNode(child));
    }
  }
  return node;
}

export {renderSJDON};