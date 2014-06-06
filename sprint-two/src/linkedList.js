var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  //list.sernum = 0;

  list.addToTail = function(value){ // O(1)
    var node = makeNode(value);
    if (!list.head) {
      list.head = node;
    }

    if (list.tail) {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function(){ // O(1)
    if (!list.head) return null;
    var ret = list.head.value;
    list.head = list.head.next;
    return ret;
  };

  list.contains = function(target){ // O(n)
    if (!list.head) return false;
    var node = list.head;
    do {
      if (node.value === target){
        return true;
      }
      node = node.next;
    } while (node);
    return false;
  };

  return list;
};

var makeNode = function(value){ // O(1)
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
