function getFrequencyFromArray(freqOrder, arr = []) {
  let freq = {}
  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1
  }
  let res = []
  for (let i = 0; i < freqOrder; i++) {
    let maxKey = Object.keys(freq)[0]
    for (let key in freq) {
      if (freq[key] > freq[maxKey]) {
        maxKey = key
      }
    }
    res.push(maxKey)
    delete freq[maxKey]
  }

  return res
}
const arr = [123, 456, 783, 456, 123, 456]
console.log("🔥 Top 2 frequent elements:", getFrequencyFromArray(2, arr))
