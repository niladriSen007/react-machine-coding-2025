const breadCrum = [
  { id: 3, parentId: 12, title: "Headphones" },
  { id: 19, parentId: 28, title: "True wireless" },
  { id: 28, parentId: 3, title: "Wired" },
  { id: 12, parentId: null, title: "Audio" },
  { id: null, parentId: 19, title: "Bluetooth" },
]

/* o/p = "Audio >> Headphones >> Wired >> True wireless >> Bluetooth" */

function getBreadCrumb(arr) {
  let parent = arr?.find((elem) => !elem?.parentId)
  let result = `${parent?.title}`

  let child
  while (true) {
    child = arr?.find((elem) => elem?.parentId === parent?.id)
    if (!child?.parentId) break
    result += ` >> ${child?.title}`
    parent = child
  }
  console.log(result)
}

getBreadCrumb(breadCrum)
