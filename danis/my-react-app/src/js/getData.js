export async function getData(urlMy) {
    const result = await fetch(urlMy);
    return await result.json();
}