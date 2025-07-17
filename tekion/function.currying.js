function currying(arg1){
  return function(arg2){
    if(!arg2) return arg1
    else return currying(arg1+arg2)
  }
}

const result = currying(1,2,3,4)
console.log(result)