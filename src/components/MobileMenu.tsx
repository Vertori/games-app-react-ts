import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { GameCategory } from "../types";

type Props = {
  selectGenreId: (genreId: number) => void;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
};

const MobileMenu = ({ selectGenreId, setCategoryName }: Props) => {
  const [genreList, setGenreList] = useState<GameCategory[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((response) =>
      setGenreList(response.data.results)
    );
  };

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Categories</h2>
      <div className="flex flex-row overflow-y-auto h-auto gap-4 mx-4 py-2 ">
        {genreList.map((item, index) => (
          <div
            onClick={() => {
              setActiveIndex(index);
              selectGenreId(item.id);
              setCategoryName(item.name);
            }}
            key={index}
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 group ${
              activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null
            }`}
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src={item.image_background}
                alt={item.name}
                className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-in-out duration-300 ${
                  activeIndex == index ? "scale-105" : null
                }`}
              />
              <h3
                className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-in-out duration-300 ${
                  activeIndex == index ? "font-bold" : null
                }`}
              >
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
