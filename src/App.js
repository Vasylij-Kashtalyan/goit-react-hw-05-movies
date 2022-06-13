import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import MoviesPage from "./components/MoviesPage";
import NotFoundView from "./views/NotFoundViews";
import { Suspense } from "react";

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
