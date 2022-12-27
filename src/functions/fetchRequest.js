async function fetchRequest(data, serverUrl) {
  const url = `${serverUrl}?name=${data}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Ошибка запроса, код:${response.status}`)
    }
    const result = await response.json()
    return result
  } catch (err) {
    return err.message
  }
}

export default fetchRequest
