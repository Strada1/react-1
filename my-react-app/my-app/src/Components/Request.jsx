const serverUrl = "https://api.genderize.io";

async function genderize(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      alert("Error:" + response.status);
    }

    let result = await response.json();
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

export { serverUrl, genderize };
