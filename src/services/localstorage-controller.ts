export function setLocalStorage(key: string, value: unknown): boolean {
  if (value != null && value != undefined) {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);

    return true;
  }

  return false;
}

export function getLocalStorage(key: string): unknown | null {
  const localStorageItem = localStorage.getItem(key);

  if (localStorageItem) {
    return JSON.parse(localStorageItem);
  }

  return null;
}
