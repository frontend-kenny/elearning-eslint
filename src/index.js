const var1 = "kenny";

function fun1(a, b) {
  return a + b;
}

const var2 = { name: "kenny", sex: "male" };

const promise1 = new Promise((r) => r());

console.group(var1);
console.group(var2);
fun1(1, 2);
promise1.then(console.log("resolved"));
