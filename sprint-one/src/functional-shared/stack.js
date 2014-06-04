var makeStack = function() {

  var stack = {};

  stack.storage = {};
  stack.len = 0;

  extend(stack, stackMethods);

  return stack;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var stackMethods = {};


// size, pop, push
stackMethods.size = function() {
  return this.len;
};

stackMethods.push = function(value) {
  this.storage[this.len] = value;
  this.len++;
};

stackMethods.pop = function() {
  if (this.len === 0) {
    return null;
  }
  this.len--;
  var ret = this.storage[this.len];
  delete this.storage[this.len];
  return ret;
};


