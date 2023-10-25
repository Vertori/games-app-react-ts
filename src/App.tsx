import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";
import GameDetailsPage from "./pages/GameDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`theme-transition ${theme} ${
        theme == "dark" ? "bg-[#121212]" : null
      } min-h-[100vh]`}
    >
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<GameDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
