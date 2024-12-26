import React from "react";
import Item from "./Item";

export default function ItemsList({ isLoading, food }) {
  return (
    <div key={food.id}>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
}
