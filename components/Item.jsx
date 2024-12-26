import React from "react";

export default function Item({ item }) {
  return (
    <div key={item.id}>
      <div key={item.id}>
        <h3>{item.name}</h3>
        <div>
          <img src={item.image} />
          <p>{item.original}</p>
        </div>
      </div>
    </div>
  );
}
