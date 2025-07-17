Object.prototype.myBind = function (context, ...params) {
  if (typeof this !== "function") {
    throw new TypeError("Array must be provided")
  }

  context = !context ? globalThis : Object(context)
  const func = this

  return function (...args) {
    return func.apply(context, [...params, ...args])
  }
}

function printName() {
  console.log(`Hi ${this.name}`)
}

let obj1 = {
  name: "Niladri",
}

const ref = printName.myBind(obj1, obj1.name)
ref()
