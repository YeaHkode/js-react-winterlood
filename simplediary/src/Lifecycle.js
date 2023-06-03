import React, { useEffect, useState } from "react";

// 하나의 파일에 두 개의 컴포넌트도 가능은 함. 그러나 가독성 때문에 추천은 안 함.
const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");
    return () => {
      // unmount 시점에 실행
      console.log("Unmount!");
    };
  }, []);
  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
