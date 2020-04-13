const throtte = (fn, time = 300) => {
  if (typeof fn === 'function' && typeof time === 'number') {
    let canRun = true;
    return function() {
      if (!canRun) {
        return;
      }
      canRun = false;
      setTimeout(() => {
        fn.apply(this, arguments);
        canRun = true;
      }, time);
    };
  }
};

const testThrotte = throtte(() => {
  console.log('测试');
}, 500);
