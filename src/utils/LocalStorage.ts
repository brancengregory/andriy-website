export function setLocalStorageItem<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorageItem<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

export function removeLocalStorageItem(key: string): void {
  localStorage.removeItem(key);
}
