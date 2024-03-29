// storage.ts
import {MMKV} from 'react-native-mmkv';

export const appStorageInstance = new MMKV();

interface KVStorage {
  setItem: (key: string, value: string) => Promise<void>;
  getItem: (key: string) => Promise<string | undefined>;
  removeItem: (key: string) => Promise<void>;
  clear: () => Promise<void>;
}

export const persistedStorage: KVStorage = {
  
  setItem: (key: string, value: string): Promise<void> => {
    return new Promise((resolve) => {
      appStorageInstance.set(key, value);
      resolve();
    });
  },

  getItem: (key: string): Promise<string | undefined> => {
    return new Promise((resolve) => {
      resolve(appStorageInstance.getString(key));
    });
  },

  removeItem: (key: string): Promise<void> => {
    return new Promise((resolve) => {
      appStorageInstance.delete(key);
      resolve();
    });
  },

  clear: (): Promise<void> => {
    return new Promise((resolve) => {
      appStorageInstance.clearAll();
      resolve();
    });
  },
};