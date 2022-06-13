import { fetchHomePage } from "../../services/API.js";
import { useState, useEffect } from "react";
import ListMovies from "../../views/ListMovies";
import Loader from "../Loader/Loader.jsx";

export default function HomePage() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetchHomePage().then(({ results }) => {
        setResults(results);
        setLoading(false);
      });
    } catch (error) {
      setError(error);
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      <ListMovies results={results} />
    </>
  );
}
