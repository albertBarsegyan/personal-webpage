'use client';
import { useEffect, useState } from 'react';
import { getErrorMessage } from '@/utils/error-utils';

export function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      console.error(`Error loading state from local storage: ${errorMessage}`);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      console.error(`Error saving state to local storage: ${errorMessage}`);
    }
  }, [state, key]);

  return [state, setState];
}

