const SERVER_URL = 'https://api.genderize.io';
async function request(name) {
    const URL = `${SERVER_URL}?name=${name}`;
    const response = await fetch(URL);

    const promise = await response.json();
    return promise;
}

export default request;