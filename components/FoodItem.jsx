import React from "react";
import styles from "./foodItem.module.css";

export default function FoodItem({ setFoodId, food }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <img className={styles.cardImage} src={food.image} alt="No image" />
        <div className={styles.titleContent}>
          <p className={styles.cardTitle}>{food.title}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => setFoodId(food.id)}
            className={styles.cardButton}
          >
            View Recipe
          </button>
        </div>
      </div>
    </>
  );
}
