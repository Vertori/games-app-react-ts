import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme} ${theme == "dark" ? "bg-[#121212]" : null}`}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
