import React, { useState } from "react";

export default function UpdaterFunction() {
  const [count, setCount] = useState(0);

  function onCountChange() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  return (
    <>
      <div>
        <button onClick={onCountChange}>Increment</button>
        <p>{count}</p>
      </div>
    </>
  );
}
