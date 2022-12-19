async function fetchRequest(data, serverUrl) {
  const url = `${serverUrl}?name=${data}`;
  try {
    let response = await fetch(url);
    if (!response.ok) {
      alert('Ошибка запроса:' + response.status)
    };
    let result = await response.json();
    return result;
  }
  catch(err) {
    console.log(err.message);
  }
};

export {fetchRequest}