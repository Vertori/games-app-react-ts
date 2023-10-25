import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../services/GlobalApi";
import { ClickedGameDetails } from "../types";
import {
  AiFillClockCircle,
  AiOutlineDesktop,
  AiFillSetting,
  AiFillTags,
} from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ThemeContext } from "../context/ThemeContext";
import StoreItem from "../components/StoreItem";

const GameDetailsPage = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [selectedGameDetails, setSelectedGameDetails] =
    useState<ClickedGameDetails | null>(null);

  // Mapping through arrays contained in game object
  let platforms = selectedGameDetails?.platforms?.map(
    (platform) => platform.platform.name
  );
  let developers = selectedGameDetails?.developers?.map(
    (developer) => developer.name
  );
  let genres = selectedGameDetails?.genres?.map((genre) => genre.name);
  let publishers = selectedGameDetails?.publishers?.map(
    (publisher) => publisher.name
  );

  useEffect(() => {
    if (id) {
      const gameId = Number(id);
      getClickedGameDetails(gameId);
    }
  }, []);

  const getClickedGameDetails = (id: number) => {
    GlobalApi.getGameByItsId(id).then((response) => {
      setSelectedGameDetails(response.data);
    });
  };

  return (
    <div className="py-[32px] px-[28px] mt-32px theme-transition ">
      <div className="mb-[36px]">
        <h3 className="text-[28px] tracking-wider text-blue-800 dark:text-yellow-300 uppercase ">
          {selectedGameDetails?.name}
        </h3>
      </div>
      {/* Details Container  */}
      <div className="grid lg:grid-cols-2 gap-[32px] items-stretch">
        {/* Details Left  */}
        <div className="max-h-[800px]">
          <img
            src={selectedGameDetails?.background_image}
            alt={selectedGameDetails?.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Details right  */}
        <div>
          <div className="mt-[6px] lg:mt-0 pb-4">
            <h4 className="text-[24px] dark:text-white font-semibold">
              Game{" "}
              <span className="text-blue-800 dark:text-yellow-300">
                Details
              </span>
            </h4>
          </div>
          <div className="mb-16">
            <p className="dark:text-white">
              {selectedGameDetails?.description_raw
                .split(".")
                .splice(0, 3)
                .join(".") + "."}
            </p>
          </div>
          {/* Details List  */}
          <ul className="flex flex-col">
            <li className="dark:text-white flex gap-x-4 mb-2">
              <div className="flex gap-x-2 items-center">
                <span className="text-blue-800 dark:text-yellow-300">
                  <AiFillClockCircle size={20} />
                </span>
                <span className="uppercase font-bold text-blue-800 dark:text-yellow-300">
                  release date:
                </span>
              </div>
              <span className="">{selectedGameDetails?.released}</span>
            </li>

            <li className="dark:text-white flex gap-x-4 items-start mb-3">
              <div className="flex gap-x-2 items-center ">
                <span className="text-blue-800 dark:text-yellow-300 ">
                  <AiOutlineDesktop size={20} />
                </span>
                <span className="uppercase font-bold text-blue-800 dark:text-yellow-300">
                  platforms:
                </span>
              </div>
              <span className="">{platforms?.join(", ")}</span>
            </li>

            <li className="dark:text-white flex gap-x-4 items-start mb-3">
              <div className="flex gap-x-2 items-center">
                <span className="text-blue-800 dark:text-yellow-300">
                  <AiFillSetting size={20} />
                </span>
                <span className="uppercase font-bold text-blue-800 dark:text-yellow-300">
                  developers:
                </span>
              </div>
              <span className="">{developers?.join(", ")}</span>
            </li>

            <li className="dark:text-white flex gap-x-4 items-start mb-3">
              <div className="flex gap-x-2 items-center">
                <span className="text-blue-800 dark:text-yellow-300">
                  <AiFillTags size={20} />
                </span>
                <span className="uppercase font-bold text-blue-800 dark:text-yellow-300">
                  genres:
                </span>
              </div>
              <span className="">{genres?.join(", ")}</span>
            </li>

            <li className="dark:text-white flex gap-x-4 items-start mb-3">
              <div className="flex gap-x-2 items-center">
                <span className="text-blue-800 dark:text-yellow-300">
                  <FaGlobe size={20} />
                </span>
                <span className="uppercase font-bold text-blue-800 dark:text-yellow-300">
                  publishers:
                </span>
              </div>
              <span className="">{publishers?.join(", ")}</span>
            </li>
          </ul>
        </div>
        {/* Tabs  */}
        <Tabs>
          <TabList className={`${theme === "dark" ? "dark" : "light"}`}>
            <Tab>Description</Tab>
            <Tab>Platform</Tab>
            <Tab>Stores</Tab>
          </TabList>
          <TabPanel>
            <h3 className="dark:text-white mb-3 text-[20px] font-semibold">
              Game Description
            </h3>
            <p className="dark:text-white ">
              {selectedGameDetails?.description_raw}
            </p>
          </TabPanel>
          <TabPanel>
            <h3 className="dark:text-white mb-3 text-[20px] font-semibold">
              Game Platforms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[16px] card-list">
              {selectedGameDetails?.platforms?.map((item) => {
                return (
                  <div className="platform-item" key={item?.platform?.id}>
                    <p className="mb-2 text-[16px] dark:text-yellow-300">
                      {item?.platform?.name}
                    </p>
                    <div className="h-[180px]">
                      <img
                        src={item?.platform?.image_background || ""}
                        alt=""
                        className="platform-img w-full h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <h3 className="dark:text-white mb-3 text-[20px] font-semibold">
              Available Stores
            </h3>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-12">
              {selectedGameDetails?.stores?.map((item) => (
                <StoreItem key={item?.store?.id} storeItem={item?.store} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default GameDetailsPage;
