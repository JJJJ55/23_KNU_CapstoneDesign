import { useState, useEffect } from 'react';

const useCount = (targetValue, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    function animate(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // 0부터 1까지 진행

      setCount(Math.floor(progress * targetValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetValue, duration]);

  return count;
};

export default useCount;
