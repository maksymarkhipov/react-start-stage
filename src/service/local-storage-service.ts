
export function localSave<T> (key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
}

export function localLoad<T> (key: string): T | null {
    const obj = localStorage.getItem(key);

    return (obj != null) ? JSON.parse(obj) : obj;
}
