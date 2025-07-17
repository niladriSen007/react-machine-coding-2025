Array.prototype.myFlatten = function () {
  if (!Array.isArray(this)) {
    throw new TypeError("Iterator must be iterable")
  }

  let result=[]
  let arr = Object(this)
  function flatArray(elements){
    for(let item of elements){
      if(Array.isArray(item)){
        flatArray(item)
      }else{
        result.push(item)
      }
    }
  }

  flatArray(arr)
  return result
}


console.log([1,2,[3,4,[5,6]]].myFlatten())