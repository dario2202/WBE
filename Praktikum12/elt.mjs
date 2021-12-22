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

export {elt as elt};