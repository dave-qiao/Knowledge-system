// es5
function testArguments() {
  // console.log([].slice.call(arguments), "arg");
  for (var i = 0; i < arguments.length; i += 1) {
    console.log(arguments[i]);
  }
}
// testArguments("a", [2, 3, 4], true);

// es6 扩展运算符
const testArg = (...args) => {
  console.log(a, args, 'args');
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
};

// testArg("b", "z", [1, 2]);

function TestClass(name) {
  this.name = name;
}

TestClass.prototype.describe = function() {
  return 'TestClass called ' + this.name;
};

class Es6Class {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `Es6Class called ${this.name}`;
  }
}

const a = new TestClass('test');
const b = new Es6Class('es6Class');

console.log(a.describe(), b.describe());

/** 继承的差别*/

// es5
function ES5() {
  this.name = 'es5';
}

for (var i = 0; i < 5; i++) {
  // const a = i;
  setTimeout(() => {
    console.log(i);
  }, 100);
}
