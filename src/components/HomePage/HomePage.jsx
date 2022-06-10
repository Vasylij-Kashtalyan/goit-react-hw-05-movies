import s from "./HomePage.module.css";
import { fetchHomePage } from "../../services/API.js";
import { useState, useEffect } from "react";

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

  return results.map(({ id, poster_path, title }) => {
    return (
      <ul className={s.home}>
        <li className={s.home_card}>
          <img
            key={id}
            className={s.card__img}
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
          <div className={s.card__information}>
            <h2 className={s.card__name}>{title}</h2>
          </div>
        </li>
      </ul>
    );
  });
  // <p>
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vel velit
  //   nihil illo est! Quos cum rerum dolores voluptates odio iste est nam
  //   excepturi placeat eligendi voluptatibus a illo eos ipsam, necessitatibus
  //   quo at quae pariatur et asperiores odit! Quasi sunt odit omnis at deserunt
  //   placeat ipsa earum dignissimos magni voluptatum quisquam veniam libero qui
  //   fugit accusantium cum ratione, facilis tempore in! Voluptates, minus
  //   nesciunt sed optio voluptate et quae accusamus est eos, dolorum quibusdam
  //   dolorem debitis perferendis voluptas rem quos eius ab, commodi cumque
  //   dolor. Repellendus porro impedit, enim temporibus quibusdam eum natus
  //   corporis id? Ducimus fugit consequatur consequuntur.
  // </p>
}
