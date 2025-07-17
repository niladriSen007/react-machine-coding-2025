const str = "Hi India is beautiful"
console.log(
  str
    ?.split(" ")
    ?.map((item) => item?.split("")?.reverse()?.join(""))
    ?.join(" ")
)
