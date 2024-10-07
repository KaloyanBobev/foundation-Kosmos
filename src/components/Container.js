import React, { useState, useEffect } from "react";

export default function Container({ data }) {
  // Declare a state variable to hold the data, initially set to the passed `data` prop
  const [items, setItems] = useState(data);

  // Optional: Effect hook can be used if the `data` prop is dynamic and changes over time
  useEffect(() => {
    setItems(data); // Update state when `data` prop changes
  }, [data]);

  return (
    <>
      {/* Map over items in the state and render them as paragraphs */}
      {items.map((item) => {
        return <p key={item.sys.id}>{item.fields.text}</p>;
      })}
    </>
  );
}
