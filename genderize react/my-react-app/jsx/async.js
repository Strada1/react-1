
// 
function fetchRequest(name) {  
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${name}`;
    const promise = fetch(url);
    promise
      .then((result) => result.json()) 

      .then(result => {return result})

      .catch(alert('Error request'))

      .finally(setTimeout(() => console.log('Done...'), 750))
  }

  export default fetchRequest

