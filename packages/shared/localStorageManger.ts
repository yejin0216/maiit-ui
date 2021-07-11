interface LocalStorageMangerType {
  get(key: string): string;
  set(key: string, value: any): void;
}

const localStorageManger: LocalStorageMangerType = {
  get(key) {
    const value = localStorage.getItem(key) ?? '';
    return value;
  },
  set(key, value) {
    localStorage.setItem(key, value);
  },
};

export default localStorageManger;
