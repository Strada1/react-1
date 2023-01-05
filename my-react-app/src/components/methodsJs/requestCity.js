export async function requestCity(value) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=a6efa68218cab903e4bd5ea3af73853d&units=metric`
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  } catch (e) {
    console.log('Unknown error');
  }
}
