function debounce(func, time = 300) {
  if (typeof func === 'function' && typeof time === 'number') {
    console.log(time, 'time');
    let timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, arguments);
      }, time);
    };
  } else {
    console.error('参数不合法');
  }
}

const test = debounce(() => {
  console.log('测试');
}, 500);


