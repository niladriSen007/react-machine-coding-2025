Object.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    console.log("Reference mismatch")
  }

  context = !context ? globalThis : Object(context)
  const func = this
  let uniqueSymbol = Symbol()
  context[uniqueSymbol] = func
  const res = context[uniqueSymbol](...args)
  delete context[uniqueSymbol]
  delete func
  return res
}

function printName() {
  console.log(`Hi ${this.name}`)
}

let obj1 = {
  name: "Niladri",
}

console.log(printName.myCall(obj1, obj1.name))
