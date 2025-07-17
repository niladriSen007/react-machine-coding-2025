function flattenArray(arr){
  return arr.reduce((acc,item)=>{
    return acc.concat(Array.isArray(item) ? flattenArray(item) : item)
  },[])
}

// 🧪 Example:
const nested = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nested));