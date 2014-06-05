var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var _storage = {};

  var _tail = 0;
  var _head = 0;

  someInstance.enqueue = function(value){
    _storage[_tail] = value;
    _tail++;
  };

  someInstance.size = function(){
    return _tail - _head;
  };


  someInstance.dequeue = function(){
    if (_tail-_head === 0){
      _tail = 0;
      _head = 0;
      return null;
    }
    var ret = _storage[_head];
    delete _storage[_head];
    _head++;
    return ret;
  };

  return someInstance;
};
