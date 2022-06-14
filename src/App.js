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
const HomePage = lazy(() => import("./components/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./components/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./components/MovieDetailsPage/MovieDetailsPage")
);
const Cast = lazy(() => import("./components/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const NotFoundView = lazy(() => import("./views/NotFoundViews"));

function App() {
  return (
    <Container>
      <Suspense>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index exact="true" element={<HomePage />} />
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
