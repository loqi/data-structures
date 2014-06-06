var Queue = function() {
  this._storage = {};
  this._head = 0; // Inclusive - i.e. the head position
  this._tail = 0; // Exclusive - i.e. the position after the tail position.
  // When _head > _tail it means queue is not empty.
};

Queue.prototype.size = function() {
  return this._tail - this._head;
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._tail++] = value;
};

Queue.prototype.dequeue = function() {
  if (this.size() <= 0) { return null; }
  var ret = this._storage[this._head];
  delete this._storage[this._head++];
  return ret;
};
