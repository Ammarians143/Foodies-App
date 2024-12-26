import { useEffect } from "react";
import { useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "e236e449280e4e95bbba38c01bc4f1d2";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data.results);
      });
  }, [query]);

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
