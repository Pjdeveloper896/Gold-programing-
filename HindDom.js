(function (global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  } else {
    global.HindDOM = factory();
  }
})(typeof window !== "undefined" ? window : this, function () {
  // Virtual DOM node factory
  function h(tag, props = {}, ...children) {
    return { tag, props, children };
  }

  // Render virtual node to real DOM element
  function render(vnode) {
    if (typeof vnode === "string" || typeof vnode === "number") {
      return document.createTextNode(vnode);
    }
    const el = document.createElement(vnode.tag);
    for (const [key, val] of Object.entries(vnode.props)) {
      el.setAttribute(key, val);
    }
    vnode.children.forEach(child => {
      el.appendChild(render(child));
    });
    return el;
  }

  // Check if two nodes are different
  function changed(node1, node2) {
    return typeof node1 !== typeof node2 ||
      (typeof node1 === "string" && node1 !== node2) ||
      node1.tag !== node2.tag;
  }

  // Diff and patch real DOM
  function updateElement(parent, newNode, oldNode, index = 0) {
    if (!oldNode) {
      parent.appendChild(render(newNode));
    } else if (!newNode) {
      parent.removeChild(parent.childNodes[index]);
    } else if (changed(newNode, oldNode)) {
      parent.replaceChild(render(newNode), parent.childNodes[index]);
    } else if (newNode.tag) {
      const newLen = newNode.children.length;
      const oldLen = oldNode.children.length;
      for (let i = 0; i < newLen || i < oldLen; i++) {
        updateElement(
          parent.childNodes[index],
          newNode.children[i],
          oldNode.children[i],
          i
        );
      }
    }
  }

  return { h, render, updateElement };
});
