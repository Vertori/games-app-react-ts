import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../services/GlobalApi";
import { Game, GameDetails } from "../types";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";

const Home = () => {
  const [allGamesList, setAllGamesList] = useState<GameDetails[]>([]);

  useEffect(() => {
    getAllGamesList();
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((response) => {
      setAllGamesList(response.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 p-8">
      {/* Categories  */}
      <div className="h-full hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3 px-3">
        {allGamesList?.length > 0 ? (
          <div>
            <Banner gameBanner={allGamesList[0]} /> <TrendingGames gamesList={allGamesList} />{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
