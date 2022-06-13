import { fetchMoviesPage } from "../../services/API";
import { useState } from "react";
import ListMovies from "../../views/ListMovies";
import { ImSearch } from "react-icons/im";
import Loader from "../Loader";
import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    if (name.trim() === "") {
      alert("Enter a name search for..");
      return;
    }
    setLoading(true);
    fetchMoviesPage(name).then(({ results }) => {
      setLoading(false);

      if (results.length === 0) {
        return alert(`Nothing found for ${name} `);
      }
      setResults(results);
      setLoading(false);
    });
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
      {loading && <Loader />}
      <ListMovies results={results} />
    </>
  );
}
