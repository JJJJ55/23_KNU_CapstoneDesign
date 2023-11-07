import { useState, useEffect } from 'react';

const useCount = (targetValue, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let time;
    let frameId;

    function animate(current) {
      if (!time) time = current;
      const elapsed = current - time;
      const progress = Math.min(elapsed / duration, 1); // 0부터 1까지 진행

      setCount(Math.floor(progress * targetValue));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    }

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [targetValue, duration]);

  return count;
};

export default useCount;
