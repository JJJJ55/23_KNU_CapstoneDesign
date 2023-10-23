import React, { useState } from 'react';

const TestFile = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleVisibility = (index) => {
    if (index === visibleIndex) {
      // 이미 보이는 div를 클릭하면 숨김
      setVisibleIndex(null);
    } else {
      // 다른 div를 클릭하면 해당 div를 보임
      setVisibleIndex(index);
    }
  };

  const divs = ['첫 번째 div', '두 번째 div', '세 번째 div'];

  return (
    <div>
      {divs.map((content, index) => (
        <div key={index}>
          <div onClick={() => toggleVisibility(index)}>클릭 {index + 1}</div>
          {index === visibleIndex ? <div>보임</div> : null}
        </div>
      ))}
    </div>
  );
};

export default TestFile;
