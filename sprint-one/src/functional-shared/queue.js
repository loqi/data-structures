var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};

  queue.head = 0;
  queue.tail = 0;
  queue.storage = {};
  extend(queue, queueMethods);
  return queue;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.tail++] = value;
};

queueMethods.dequeue = function(){
  if (this.size() < 1) {return null;}
  var ret = this.storage[this.head];
  delete this.storage[this.head++];
  return ret;
};

queueMethods.size = function(){
  return this.tail - this.head;
};
