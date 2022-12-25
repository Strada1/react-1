function Storage(method, key, value) {
    {
        method === 'set'
            ? localStorage.setItem(key, JSON.stringify(value))
            : localStorage.getItem(key)
    }
}

export { Storage }
