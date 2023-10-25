import { useState, useContext, useEffect, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/images/logo.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";
import GlobalApi from "../services/GlobalApi";
import { OptionGame } from "../types";

const Header = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<OptionGame[]>([]);

  const getSearchOptions = (value: string) => {
    GlobalApi.getGameByItsName(value).then((response) =>
      setOptions(response.data.results)
    );
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
    if (value === "") return;
    getSearchOptions(value);
  };

  const onOptionSelect = (option: OptionGame) => {
    setOptions([]);
    setTerm("");
    navigate(`/details/${option.id}`);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      setTheme(storedTheme);
    } else {
      setTheme("dark");
    }
  }, []);

  return (
    <div className="flex items-center p-3">
      {/* Logo  */}
      <Link to="/">
        <img src={logo} alt="logo" width={100} height={100} />
      </Link>
      {/* Searchbar  */}
      <div className="relative flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          value={term}
          placeholder="Search Games"
          className="bg-transparent outline-none px-2 w-full"
          onChange={onInputChange}
        />
        {term !== "" && (
          <ul className="absolute top-10 left-5 bg-slate-300 dark:bg-white ml-1 rounded-b-md z-40">
            {options.map((option, index: number) => (
              <li key={index}>
                <button
                  className="text-left text-sm px-2 py-2 cursor-pointer w-full hover:bg-slate-200"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {theme == "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
