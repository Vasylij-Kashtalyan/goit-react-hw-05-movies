import { Link, useLocation } from "react-router-dom";
import s from "./ListMovies.module.css";

function ListMovies({ results }) {
  const location = useLocation();

  return (
    <>
      <ul className={s.home}>
        {results.map(({ id, poster_path, title }) => {
          return (
            <li key={id} className={s.card}>
              <Link state={{ from: location }} to={`${id}`}>
                <img
                  className={s.card__img}
                  src={`https://image.tmdb.org/t/p/w200${poster_path}`}
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
export default ListMovies;
