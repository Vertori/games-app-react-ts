import { GameDetails } from "../types";
import { Link } from "react-router-dom";

type Props = {
  gamesList: GameDetails[];
};

const TrendingGames = ({ gamesList }: Props) => {
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {gamesList.map(
          (item, index) =>
            index < 4 && (
              <Link to={`/details/${item.id}`} key={index}>
                <div className="bg-[#76a8f75e] rounded-lg group hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer h-full">
                  <img
                    src={item.background_image}
                    alt={item.name}
                    className="h-[270px] rounded-t-lg object-cover"
                  />
                  <h2 className="dark:text-white text-[20px] font-bold p-2">
                    {item.name}
                  </h2>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
