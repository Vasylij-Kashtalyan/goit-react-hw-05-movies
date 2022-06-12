import s from "./HomePage.module.css";
import { fetchHomePage } from "../../services/API.js";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    try {
      fetchHomePage().then(({ results }) => {
        setResults((prevState) => [...prevState, ...results]);
      });
    } catch (error) {
      setError(error);
    }
  }, []);

  return (
    <ul className={s.home}>
      {results.map(({ id, poster_path, title }) => {
        return (
          <li key={id} className={s.card}>
            <NavLink to={`/movies/${id}`}>
              <img
                className={s.card__img}
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
              />
            </NavLink>
            <div className={s.card__information}>
              <h2 className={s.card__name}>{title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
