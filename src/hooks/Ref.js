import React, { useState, useEffect, useRef } from "react";

export default function Rff() {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }

  const renderCount = useRef(1);
  console.log(renderCount);

  const inputRef = useRef();
  console.log(inputRef.current);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    inputRef.current.focus();
  });

  return (
    <>
      <input ref={inputRef} onChange={handleChange}></input>
      <div>My Name is {name}</div>
      <p>{renderCount.current}</p>
    </>
  );
}
