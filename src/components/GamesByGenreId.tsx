import { Link } from "react-router-dom";
import { GameDetails } from "../types";

type Props = {
  gamesList: GameDetails[];
  selectedCategory: string;
};

const GamesByGenreId = ({ gamesList, selectedCategory }: Props) => {
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        {selectedCategory} Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gamesList.map((game, index) => (
          <Link to={`/details/${game.id}`} key={index}>
            <div className="bg-[#76a8f75e] p-3 rounded-lg pb-12 h-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-[300px] rounded-xl object-cover "
              />
              <h2 className="text-[20px] dark:text-white font-bold py-1">
                {game.name}
                <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                  {game.metacritic}
                </span>
              </h2>
              <p className="text-gray-500 dark:text-gray-300 py-1 flex gap-x-4">
                <span>⭐{game.rating}</span>
                <span>💬{game.reviews_count}</span>
                <span>🔥{game.suggestions_count}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamesByGenreId;
