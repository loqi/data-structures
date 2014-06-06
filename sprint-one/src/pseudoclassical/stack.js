var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this._storage = {};
  this._size = 0;
};

Stack.prototype.size = function() {
  return this._size;
};

Stack.prototype.push = function(value) {
  this._storage[this._size++] = value;
};

Stack.prototype.pop = function() {
  if (this._size <= 0) { return null; }
  return this._storage[--this._size];
};
