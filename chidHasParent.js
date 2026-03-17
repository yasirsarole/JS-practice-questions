// Given a parent and a child node from a DOM tree verify whether the child actually has the given parent
function hasParent(parent, child) {
  return child.parentNode === parent;
}

function hasParent(parent, child) {
  let node = child;

  while (node) {
    if (node === parent) return true;
    node = node.parentNode;
  }

  return false;
}
