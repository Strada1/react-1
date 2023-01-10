function generateId(arr) {
  const randomNumber = Math.random() * 1000;
  const newId = Math.round(randomNumber);
  arr.forEach((element) => {
    if (element.id === newId) {
      generateId(arr);
    }
  });
  return newId;
}
export default generateId;
