import { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";
import ItemsList from "./ItemsList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "e236e449280e4e95bbba38c01bc4f1d2";
  useEffect(() => {
    async function getRecipe() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    getRecipe();
  }, [foodId]);
  return (
    <div>
      <div className={styles.cardContainer} key={food.id}>
        <h1 className={styles.title}>{food.title}</h1>

        <img className={styles.image} src={food.image} />
        <div className={styles.details}>
          <span>
            ⌚<strong>{food.readyInMinutes} minutes</strong>
          </span>
          <strong>👪Serve &nbsp;{food.servings}</strong>
          <span></span>
          <span>{food.vegetarian ? "🥕Vegetarian" : "🍖Non-Vegerarian"}</span>
        </div>
        <div>
          <span>
            💵<strong>{food.pricePerServing} Dollars</strong>
          </span>
        </div>
        <div>
          <h1>Ingradients</h1>
          <ItemsList food={food} isLoading={isLoading} />
        </div>

        <h2 className={styles.title2}>Instructions</h2>
        <div className={styles.instructions}>
          <ol>
            {isLoading ? (
              <h3>Loading...</h3>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.id}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
