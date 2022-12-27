async function getData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        alert(error);
    }
}

export { getData };
