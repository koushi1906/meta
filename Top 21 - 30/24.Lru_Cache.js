let LruCache = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

LruCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;
  let val = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, val);
  return val;
};

LruCache.prototype.set = function (key, val) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, val);
  if (this.capacity < this.cache.size) {
    this.cache.delete(this.cache.keys().next().value);
  }
};
