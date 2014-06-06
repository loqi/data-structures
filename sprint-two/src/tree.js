var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value) { // O(1)
  var child = makeTree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) { // O(n)
  if (this.value === target) {
    return true;
  }

  for (var x = 0; x < this.children.length; x++) {
    var child = this.children[x];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
