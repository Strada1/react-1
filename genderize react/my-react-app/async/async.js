
export default fetchRequest;
const serverUrl = 'https://api.genderize.io';

async function fetchRequest(name) {
  const url = `${serverUrl}?name=${name}`;
  try{
  const promise = await fetch(url);
  const response = await promise.json();
  return response}
  catch{
    alert ('Error request')
  }
}
