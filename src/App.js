import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import MoviesPage from "./components/MoviesPage";

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route exact="true" path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Container>
  );
}

export default App;
