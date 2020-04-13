// 宏任务与微任务

// setTimeout(() => {
//   console.log('延迟一秒');
// }, 1000);

// setTimeout(() => {
//   console.log('延迟0');
//   let p2 = new Promise(resolve => {
//     console.log('p2');
//     resolve();
//   }).then(() => {
//     console.log('p2-then');
//   });
// }, 0);

// async function test() {
//   console.log('async-start');
// }

// test();

// let p1 = new Promise((resolve, reject) => {
//   console.log('异步');
//   resolve();
// }).then(() => {
//   console.log('p1-then');
// });

// console.log('end');
// p1.then(() => {
//   console.log('p1-then-rewite');
// });

// -------------------

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);
async1();
new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');

// script start
// async1 start
// async2
// async1 end
// promise1
// script end
// promise2
// setTimeout
