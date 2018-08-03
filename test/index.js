const queued = require('../')

let queue = new queued()

queue.push("foo")
queue.push("bar")

console.log(queue.first()) // "foo"
console.log(queue.first()) // "bar"
console.log(queue.first()) // undefined
