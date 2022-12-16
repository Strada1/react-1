async function requestGender(name) {
  const serverUrl = 'https://api.genderize.io';
  const url = `${serverUrl}?name=${name}`;
  const genderResponse = await fetch(url);
  const gender = await genderResponse.json();
  return gender;
}

export default requestGender;
