import { useState, useEffect } from 'react';

const useRandomCount = (targetValue) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * (targetValue + 1));
      setCount(randomValue);
    }, 1000); // 1초마다 랜덤 값 업데이트

    return () => {
      clearInterval(interval);
    };
  }, [targetValue]);

  return count;
};

export default useRandomCount;
