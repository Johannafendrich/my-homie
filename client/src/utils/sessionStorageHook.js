import React from 'react';

function loadStorage(key) {
  try {
    const item = sessionStorage.getItem(key);
    return JSON.parse(item);
  } catch (error) {
    console.log(error);
    return null;
  }
}

function useSessionStorage(key, initialValue) {
  const [storedValue, setStoredValue] = React.useState(
    loadStorage(key) || initialValue
  );

  React.useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
}
export default useSessionStorage;
