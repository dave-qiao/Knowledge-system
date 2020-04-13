const unique = (arr = []) => {
  const ret = [];
  const loop = data => {
    data.forEach(item => {
      if (Array.isArray(item)) {
        loop(item);
      } else {
        ret.push(item);
      }
    });
  };
  loop(arr);
  return [...new Set(ret)].sort((a, b) => a - b);
};

const arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10
];
const a = unique(arr);
console.log(a, 'a');

// es6
console.log(
  Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b),
  'es6 去重'
);
