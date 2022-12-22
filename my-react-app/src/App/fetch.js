async function getDataGender(firstName) {
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    try {
        const responce = await fetch(url);
        const responceJSON = await responce.json();
        return responceJSON;
    } catch (error) {
        alert(error);
        return null;
    }
}

export { getDataGender };
