Object.create = function(prototype, properties) {
    if (typeof(prototype) !== 'object') {
        throw new TypeError();
   }
    x = {}
    if (prototype === null) {
        x.proto = null;
    } else {
      x.proto = prototype;
    }
    if (typeof(properties) === 'object') {
        Object.defineProperties(x, properties);
    }
    return x;
  //Your code goes here
  //And remember: you need not to reinvent Object.defineProperties on your own!
};