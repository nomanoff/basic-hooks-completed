import React, { useState, useMemo } from "react";

export default function Memo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const myStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      ></input>
      <button onClick={() => setDark((prevV) => !prevV)}>Change Theme</button>
      <div style={myStyle}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log("Slow function:");
  for (let i = 0; i <= 100000000; i++) {}
  return num * 2;
}
