import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import MoviesPage from "./components/MoviesPage";
import NotFoundView from "./views/NotFoundViews";
import { Suspense } from "react";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import Cast from "./components/Cast";
import Reviews from "./components/Reviews/Reviews";
// import Loader from "./components/Loader";

function App() {
  return (
    <Container>
      <Suspense>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index excat element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
