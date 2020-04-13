const obj = {
  a: 2,
  b: 4,
  c: 'bv',
};

const objMap = new Map([
  ['map1', 'a'],
  ['map2', 2],
  ['map3', 'vc'],
]);
// for
for (let i = 0; i < 10; i += 1) {
  console.log(i, 'i');
}

// for in
for (const item in obj) {
  console.log('const for in', obj[item]);
}

for (let item in obj) {
  console.log('let for in', item);
}

// for of
for (const item of objMap) {
  console.log(item, 'item');
}

for (let item of objMap) {
  console.log(item, 'item');
}
