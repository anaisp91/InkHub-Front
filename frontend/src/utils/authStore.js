import { storage } from "./storage";

const KEY = "token";

export const authStore = {
  get() {
    return storage.get(KEY);
  },
  set(token) {
    return storage.set(KEY, token);
  },
  clear() {
    return storage.remove(KEY);
  },
};
