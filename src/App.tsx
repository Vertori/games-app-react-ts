import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";
import GameDetails from "./pages/GameDetails";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme} ${
        theme == "dark" ? "bg-[#121212]" : null
      } min-h-[100vh]`}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/details" element={<GameDetails />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
