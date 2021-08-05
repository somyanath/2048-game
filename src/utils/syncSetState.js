import { useState } from 'react';

const useSyncState = (initialValue) => {
  const [data, setData] = useState(initialValue);

  let current = data;

  const get = () => current;

  const set = newValue => {
    current = newValue;
    setData(newValue);
    // return current;
  }

  return {
    get,
    set,
  }
}

export default useSyncState