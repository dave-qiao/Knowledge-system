Array.prototype.forEach = function(func, thisArg) {
  if (typeof func !== 'function') {
    throw new TypeError('func is not a function');
  }
  if (!this) {
    throw new TypeError('this is null or undefined');
  }
  const current = this;
  const length = current.length;
  let callThis = null;
  if (thisArg) {
    callThis = thisArg;
  }

  for (let i = 0; i < length; i++) {
    func.call(callThis, current[i], i, current);
  }
};

const obj = {
  test() {
    ['1', '2', '3', '4'].forEach((item, index) => {
      console.log(item, index, 'index', this);
    });
  },
  name: 'object',
};
obj.test();
