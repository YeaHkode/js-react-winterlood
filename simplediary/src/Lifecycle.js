import React, { useEffect, useState } from "react";

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("mount!");
  }, []);

  useEffect(() => {
    console.log("update!");
  });

  useEffect(() => {
    console.log(`count is update :  ${count}`);
    if (count > 5) {
      alert("count가 5를 넘었습니다. 따라서 0으로 초기화합니다.");
      setCount(0);
    }
  }, [count]);

  useEffect(() => {
    console.log(`text is update :  ${text}`);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default Lifecycle;