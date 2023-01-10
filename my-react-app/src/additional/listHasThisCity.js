const listHasThisCity = (arr, nameCity) => {
  const findOrNot = arr.find((element) => element.nameCity === nameCity);
  return findOrNot;
};

export default listHasThisCity;
