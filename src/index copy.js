const var1 = 'kenny'

function fun1(a, b) {
  return a + b
}

const promise1 = new Promise((r) => r())

console.group(var1)
fun1(1, 2)
promise1.then(console.log('resolved'))
