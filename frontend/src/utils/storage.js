export const storage = {
  get(key) {
    try {
      const getStorage = localStorage.getItem(key);
      return getStorage ? JSON.parse(getStorage) : null;
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      // eslint-disable-next-line no-empty
    } catch {}
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
      // eslint-disable-next-line no-empty
    } catch {}
  },
  clear() {
    try {
      localStorage.clear();
      // eslint-disable-next-line no-empty
    } catch {}
  },
};
