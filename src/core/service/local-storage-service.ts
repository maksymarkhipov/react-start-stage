
export function localSave<T> (key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
}

export function localLoad<T> (key: string): T | null {
    const data = localStorage.getItem(key);

    return (data != null) ? JSON.parse(data) : data;
}
