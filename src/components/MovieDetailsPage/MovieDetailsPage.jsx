import s from "./MovieDetailsPage.module.css";
import { useState, useEffect } from "react";
import { fetchMovieDetailsPage } from "../../services/API";
import {
  Link,
  useParams,
  useLocation,
  Outlet,
  useNavigate,
} from "react-router-dom";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetailsPage(movieId).then((film) => {
      setFilmInfo(film);
    });
  }, [movieId]);

  const goBack = () => {
    if (location?.state?.from) {
      const { pathname, search } = location?.state?.from;
      return navigate(`${pathname}${search}`);
    }
    return navigate("/");
  };

  return (
    <>
      {filmInfo && (
        <>
          <button onClick={goBack} className={s.btn}>
            Go Back
          </button>
          <div className={s.wrapper}>
            <img
              className={s.picture}
              src={`https://image.tmdb.org/t/p/original${filmInfo.poster_path}`}
              alt=""
            />
            <ul>
              <h2 className={s.title}>{`${filmInfo.title}`}</h2>
              <li className={s.item}>
                <h3>Vote / Votes</h3>
                <p>{filmInfo.vote_average}</p>
              </li>
              <li className={s.item}>
                <h3>Release date</h3>
                <p>{filmInfo.release_date}</p>
              </li>
              <li className={s.item}>
                <h3>About</h3>
                <p>{filmInfo.overview}</p>
              </li>
              <li className={s.item}>
                <h3>Genre</h3>
                <p>{filmInfo.genres.map(({ name }) => name).join(", ")}</p>
              </li>
            </ul>
          </div>
        </>
      )}
      <ul className={s.list}>
        <li className={s.item}>
          <Link
            className={s.link}
            to="cast"
            state={{ from: location?.state?.from }}
          >
            Cast
          </Link>
        </li>
        <li className={s.item}>
          <Link
            className={s.link}
            to="reviews"
            state={{ from: location?.state?.from }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
