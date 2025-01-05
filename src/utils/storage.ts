import { StateStorage } from 'zustand/middleware';

const LocalStorage: StateStorage = {
  getItem: (name: string) =>
    new Promise((resolve) => {
      chrome.storage.local.get(name, (result) => {
        resolve(result[name] || null);
      });
    }),
  setItem: (name: string, value: string) =>
    new Promise<void>((resolve) => {
      chrome.storage.local.set({ [name]: value }, () => resolve());
    }),
  removeItem: (name: string) =>
    new Promise<void>((resolve) => {
      chrome.storage.local.remove(name, () => resolve());
    }),
};

export { LocalStorage };
