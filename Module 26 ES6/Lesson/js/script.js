// let p1 = 2;
// const ob1 = {
//     p1: 1,
//     p2: () => {
//         console.log(this.p1);
//     }
// };

// const ob2 = {
//     p1: 1,
//     p2: function () {
//         console.log(this.p1);
//     }
// };

// ob1.p2();
// ob2.p2();

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo"),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);



Promise.any([promise1, promise2])
  .then((value) => console.log(value))