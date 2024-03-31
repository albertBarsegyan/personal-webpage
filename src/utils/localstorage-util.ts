import { getErrorMessage } from '@/utils/error-utils';

const LocalStorageUtil = {
  getItem(key:string) {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      console.error(`Error getting item from local storage: ${errorMessage}`);
      return null;
    }
  },

  setItem(key:string, value:any) {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      console.error(`Error setting item in local storage: ${errorMessage}`);
    }
  },

  removeItem(key:string) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      console.error(`Error removing item from local storage: ${errorMessage}`);
    }
  },

  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      console.error(`Error clearing local storage: ${errorMessage}`);
    }
  },
};

export default LocalStorageUtil;
