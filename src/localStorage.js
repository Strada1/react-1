export function setStorageItem(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function getStorageItem(key) {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (e) {
		alert(e);
	}
}