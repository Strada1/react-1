async function sendWeatherRequest(serverUrl, apiKey, cityName) {
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Request error:${response.status},please try another city`
      );
    }
    const result = await response.json();
    return result;
  } catch (err) {
    alert(err);
    return null;
  }
}

export default sendWeatherRequest;
