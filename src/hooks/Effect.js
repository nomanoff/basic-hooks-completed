import React, { useState, useEffect } from "react";

export default function Effect() {
  //   const [resourceType, setResourceType] = useState("posts");
  //   const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //       .then((response) => response.json())
  //       .then((json) => setItems(json));
  //   }, [resourceType]);

  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [windowHeight, setwindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setwindowHeight(window.innerHeight);
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div>
      {/* <h1 className="hook-title">useEffect</h1>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h2>{resourceType}</h2> */}

      <h1>{windowHeight}</h1>
      <h1>{windowWidth}</h1>
    </div>
  );
}
