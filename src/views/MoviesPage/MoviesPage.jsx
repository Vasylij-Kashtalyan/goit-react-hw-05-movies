import { useState, useEffect } from "react";
import { fetchMoviesPage } from "../../services/API";
import { useSearchParams } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import ListMovies from "../../components/ListMovies";
import Loader from "../../components/Loader";
import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get("film") || "";

  useEffect(() => {
    if (searchName) {
      setLoading(true);
      fetchMoviesPage(searchName)
        .then(({ results }) => {
          setResults(results);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.search.value;

    if (name.trim() === "") {
      return alert(`Enter name for search`);
    }
    setSearchParams({ film: name });
  };

  return (
    <>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <ImSearch className={s.ImSearch} />
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={s.SearchFormInput}
          type="name"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
      </form>
      {loading && <Loader />}
      <ListMovies results={results} />
    </>
  );
}
