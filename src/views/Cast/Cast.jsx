import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FetchFilmCast } from "../../services/API";
import Loader from "../../components/Loader";
import s from "./Cast.module.css";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCast = async (movieId) => {
      const { cast } = await FetchFilmCast(movieId);
      setCast(cast);
      setLoading(false);
    };
    fetchCast(movieId);
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {cast && cast.length > 0 ? (
        <ul className={s.list}>
          {cast.map(({ name, profile_path, character, credit_id }) => (
            <li className={s.item} key={credit_id}>
              <img
                src={`https://image.tmdb.org/t/p/w185${profile_path}`}
                alt={name}
              />
              <h2>Actor: {name}</h2>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any Cast for this movie</p>
      )}
    </>
  );
}
