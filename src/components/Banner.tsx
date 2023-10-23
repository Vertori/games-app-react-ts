import { GameDetails } from "../types";

type Props = {
  gameBanner: GameDetails;
};

const Banner = ({ gameBanner }: Props) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
        <button className="bg-blue-700 hover:bg-blue-600 transition-all text-white px-4 py-2 rounded-lg">
          Get Now
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        alt={gameBanner.name}
        className="md:h-[320px] w-full object-cover rounded-xl"
      />
    </div>
  );
};

export default Banner;
