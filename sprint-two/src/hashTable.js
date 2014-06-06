// Psuedo-classical style

var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){ // O(1)
  var pair = [k, v];
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket === undefined || bucket === null) {
    bucket = [];
    this._storage.set(i, bucket);
  }

  // Search for keys
  var index = this._getValueFromBucket(bucket, k);
  bucket[index] = pair;
};

HashTable.prototype.retrieve = function(k){ // O(1)
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  console.log('retrieve ' + k + ' results in ' + this._storage[i]);

  var index = this._getValueFromBucket(bucket, k);
  if (index === bucket.length) {
    return null;
  }
  return bucket[index][1];
};

HashTable.prototype.remove = function(k){ // O(1)
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var index = this._getValueFromBucket(bucket, k);
  if (index === bucket.length) {
    return null;
  }
  bucket.splice(index, 1);
};

HashTable.prototype._getValueFromBucket = function(bucket, k) { // O(n) ('O of a wee-tiny n')
  if (bucket !== undefined && bucket !== null) {
    for (var x=0; x<bucket.length; x++) {
      var pair = bucket[x];
      if (pair[0] === k) {
        return x;
      }
    }
  }
  return bucket.length;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
