var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   var stack = Object.create(stackMethods);
   return stack;
};

var stackMethods = {
  // push, pop, size
  //
};

stackMethods._size = 0;
stackMethods._storage = {};

stackMethods.size = function() {
  return this._size;
};

stackMethods.pop = function() {
  if (this._size === 0) {
    return null;
  }
  var ret = this._storage[--this._size];
  delete this._storage[this._size];
  return ret;
};

stackMethods.push = function(value) {
  this._storage[this._size++] = value;

};
