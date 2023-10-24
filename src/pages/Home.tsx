import { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../services/GlobalApi";
import { GameDetails } from "../types";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenreId from "../components/GamesByGenreId";
import MobileMenu from "../components/MobileMenu";

const Home = () => {
  const [allGamesList, setAllGamesList] = useState<GameDetails[]>([]);
  const [gameListByGenres, setGameListByGenres] = useState<GameDetails[]>([]);
  const [selectedCategoryName, setSelectedCategoryName] =
    useState<string>("Action");

  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  }, []);

  // FETCHING ALL GAMES
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((response) => {
      setAllGamesList(response.data.results);
    });
  };

  // GET ALL GAMES BY SELECTED CATEGORY
  const getGameListByGenresId = (id: number) => {
    console.log(id);
    GlobalApi.getGameListByGenreId(id).then((response) => {
      setGameListByGenres(response.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 p-8">
      {/* Categories  */}
      <div className="h-full hidden md:block">
        <GenreList
          selectGenreId={(genreId) => getGameListByGenresId(genreId)}
          setCategoryName={setSelectedCategoryName}
        />
      </div>
      <div className="md:hidden col-span-4">
        <MobileMenu
          selectGenreId={(genreId) => getGameListByGenresId(genreId)}
          setCategoryName={setSelectedCategoryName}
        />
      </div>
      <div className="col-span-4 md:col-span-3 px-3">
        {allGamesList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGamesList[0]} />{" "}
            <TrendingGames gamesList={allGamesList} />{" "}
            <GamesByGenreId
              gamesList={gameListByGenres}
              selectedCategory={selectedCategoryName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
