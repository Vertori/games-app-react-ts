import { GameStore } from "../types";

type Props = {
  storeItem: GameStore;
};

const StoreItem = ({ storeItem }: Props) => {
  console.log(storeItem);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[120px] gap-4 my-4 py-2">
      <div className="h-[180px]">
        <img
          src={storeItem?.image_background}
          alt={storeItem?.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" flex flex-col justify-center p-4">
        <h5 className="uppercase font-semibold text-blue-800 dark:text-yellow-300">
          {storeItem?.name}
        </h5>
        <ul className="">
          <li>
            <span className="font-semibold dark:text-white">Domain: </span>
            <a
              href={`https://www.${storeItem?.domain}`}
              className="dark:text-white"
            >
              {storeItem?.domain}
            </a>
          </li>
          <li>
            <p className="dark:text-white">
              <span className="font-semibold">Games Count: </span>
              {storeItem?.games_count}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StoreItem;
