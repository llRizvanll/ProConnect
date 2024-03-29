// storage.ts
import {MMKV} from 'react-native-mmkv';
const appStorageInstance = new MMKV();

interface KVStorage {
  setItem: (key: string, value: string) => Promise<void>;
  getItem: (key: string) => Promise<string | undefined>;
  removeItem: (key: string) => Promise<void>;
  clear: () => Promise<void>;
  containsKey: (key: string) => Promise<boolean>;
}

export const persistedStorage: KVStorage = {
  
  setItem: (key: string, value: string): Promise<void> => {
    console.log('setItem', key, value);
    return new Promise((resolve) => {
      try {
        console.log('setItem', key, value);
        appStorageInstance.set(key, value);
        resolve();
      } catch (error) {
        console.error('Error setting item:', error);
        reject(error);
      }
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

  containsKey: (key: string): Promise<boolean> => { 
    return new Promise((resolve) => {
      resolve(appStorageInstance.contains(key));
    });
  } 
};

function reject(error: any) {
  throw new Error('Function not implemented.');
}
