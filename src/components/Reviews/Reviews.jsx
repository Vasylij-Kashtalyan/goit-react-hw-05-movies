import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviews } from "../../services/API";
import s from "./Reviews.module.css";
import Loader from "../Loader";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchReviews(movieId).then(({ results }) => {
      setReviews(results);
      setLoading(false);
    });
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(({ content, id }) => (
            <li className={s.item} key={id}>
              <h2>Content</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any Reviews for this movie</p>
      )}
    </>
  );
}
