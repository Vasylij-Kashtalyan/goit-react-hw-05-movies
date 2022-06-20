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

  const [search, setSearch] = useState(searchName);

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

    if (name.trim() === "") return alert(`Enter name for search`);

    if (searchName.length === 0) return alert(`Movie ${name} not found`);

    setSearchParams({ film: name });
  };
  const handleInput = (e) => {
    const chang = e.currentTarget.value;
    setSearch(chang);
  };

  return (
    <>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <ImSearch className={s.ImSearch} />
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          value={search}
          onChange={handleInput}
          className={s.SearchFormInput}
          type="search"
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
