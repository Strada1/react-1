function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

const idGenerator = (arr) => {
  const newId = randomInteger(1, 300)
  arr.forEach((element) => {
    if (element.id === newId) {
      idGenerator(arr)
    }
  })
  return newId
}

export default idGenerator
