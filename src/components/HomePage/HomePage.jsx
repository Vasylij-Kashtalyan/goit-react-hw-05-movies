import { fetchHomePage } from "../../services/API.js";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader.jsx";
import { useLocation, Link } from "react-router-dom";
import s from "./HomePage.module.css";

export default function HomePage() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetchHomePage().then(({ results }) => {
      setResults(results);
      setLoading(false);
    });
    setError(error);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <h1>Trending today</h1>
      <ul className={s.home}>
        {results.map(({ id, poster_path, title }) => {
          return (
            <li key={id} className={s.card}>
              <Link state={{ from: location }} to={`movies/${id}`}>
                <img
                  className={s.card__img}
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title}
                />
              </Link>
              <div className={s.card__information}>
                <h2 className={s.card__name}>{title}</h2>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
