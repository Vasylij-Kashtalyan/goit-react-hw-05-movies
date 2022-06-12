import { useState, useEffect } from "react";
import { fetchMoviesPage } from "../../services/API";
import { ImSearch } from "react-icons/im";
import s from "./MoviesPage.module.css";
import HomePage from "../HomePage/HomePage";

export default function MoviesPage({ onSubmit }) {
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!name) {
      return;
    }
    try {
      fetchMoviesPage(name).then(({ results }) => {
        setResults((prevState) => [...prevState, ...results]);
      });
    } catch {}
  }, [name]);

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    if (name.trim() === "") {
      alert("Введіть імя для пошуку..");
    }
    onSubmit(name);
  };

  const handlerNameChanche = (evt) => setName(evt.currentTarget.value);

  return (
    <>
      <form className={s.SearchForm} onSubmit={handlerSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <ImSearch className={s.ImSearch} />
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          name="name"
          onChange={handlerNameChanche}
          value={name}
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </form>

      {/* {results.length && <HomePage onSubmit={handlerNameChanche} />} */}
    </>
  );
}
