import React, { useEffect, useState } from "react";

const CHILD = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      //   .then((json) => console.log(json));
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>

      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default CHILD;
