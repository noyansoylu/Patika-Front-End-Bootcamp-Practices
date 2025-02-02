import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StarshipDetailPage from "./pages/StarshipDetailPage";
import { StarshipProvider } from "./context/StarshipContext";
import "./App.css";

function App() {
  return (
    <StarshipProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/starship/:id" element={<StarshipDetailPage />} />
        </Routes>
      </Router>
    </StarshipProvider>
  );
}

export default App;
