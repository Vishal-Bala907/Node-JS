const { data, addTwo } = require("./file1");
const { myFunc, myFunc2, data2 } = require("./file3");

console.log(data);
console.log(addTwo(3, 4));
myFunc();
myFunc2();

function myFunction3() {
  console.log(data2);
}
myFunction3();
