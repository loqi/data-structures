var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  return queue;
};

var queueMethods = {
  head    : 0,
  tail    : 0,
  storage : {}
};

queueMethods.enqueue = function(value){
  this.storage[this.tail++] = value;
};

queueMethods.dequeue = function(){
  if (this.size() === 0) {
    this.head = 0;
    this.tail = 0;
    return null;
  }
  var ret = this.storage[this.head];
  delete this.storage[this.head++];
  return ret;
};

queueMethods.size = function(){
  return this.tail - this.head;
};
