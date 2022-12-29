async function getData(url) {
    try {
        const response = await fetch(url);
         if(!response.ok) {
            alert('Ошибка, город не найден! Проверьте синтаксис')
         }
        return await response.json();
    } catch (error) {
        alert(error);
    }
}

export { getData };
