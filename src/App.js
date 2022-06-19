import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
// import AppBar from "./components/AppBar/AppBar";
// import HomePage from "./components/HomePage/HomePage.jsx";
// import MoviesPage from "./components/MoviesPage";
// import NotFoundView from "./views/NotFoundViews";
// import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
// import Cast from "./components/Cast";
// import Reviews from "./components/Reviews/Reviews";

const AppBar = lazy(() => import("./components/AppBar/AppBar"));
const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage/MovieDetailsPage")
);
const Cast = lazy(() => import("./views/Cast"));
const Reviews = lazy(() => import("./views/Reviews/Reviews"));
const NotFoundView = lazy(() =>
  import("./components/NotFoundViews/NotFoundViews")
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense>
        <Routes>
          <Route path="/" exact="true" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
