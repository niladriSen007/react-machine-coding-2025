let user = {
  name: "John", // User's name 👤
  address: {
    country: "India", // User's country 🇮🇳
    state: "West Bengal", // User's state 🏞
    education: {
      school: "APS", // User's school 🏫
      year: 2021, // Year of education 📅
    },
  },
}

function flattenObj(obj = {}, parentKey = "") {
  return Object.keys(obj)?.reduce((acc, key) => {
    const newKey = parentKey ? `${parentKey}-${key}` : key
    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(acc, flattenObj(obj[key], newKey))
    } else {
      acc[newKey] = obj[key]
    }
    return acc
  }, {})
}
console.log(flattenObj(user, 'user'));