var makeBinarySearchTree = function(value){
  var bst = {};
  bst.value = value;
  bst.left = null;
  bst.right = null;
  bst.insert = bst_insert;
  bst.contains = bst_contains;
  bst.depthFirstLog = bst_depthFirstLog;
  return bst;
};

var bst_insert = function(value) { // O(log n) on balanced tree -- O(n) unbalanced
  if (value < this.value)
    this.left ? this.left.insert(value) : this.left = makeBinarySearchTree(value);
  else if (value > this.value)
    this.right ? this.right.insert(value) : this.right = makeBinarySearchTree(value);
  else this.value = value; // previous value loosely equals new value. Overwrite old with new.
};

var bst_contains = function(value){ // O(log n) on balanced tree -- O(n) unbalanced
  if (value < this.value) { return ( this.left  ? this.left.contains(value) : false ); }
  if (value > this.value) { return ( this.right ? this.right.contains(value) : false ); }
  return true;
};

var bst_depthFirstLog = function(func){ // O(n) on any tree
  func.call(null, this.value);
  if (this.left) this.left.depthFirstLog(func);
  if (this.right) this.right.depthFirstLog(func);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
