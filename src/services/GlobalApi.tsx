import axios from "axios";

const key = import.meta.env.VITE_GAMES_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosInstance.get(`/genres?key=${key}`);
const getAllGames = axiosInstance.get(`/games?key=${key}`);
const getGameListByGenreId = (id: number) => {
  return axiosInstance.get(`/games?key=${key}&genres=${id}`);
};
const getGameByItsId = (id: number) => {
  return axiosInstance.get(`/games/${id}?key=${key}`);
};
const getGameByItsName = (name: string) => {
  return axiosInstance.get(`/games?key=${key}&search=${name}`);
};

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
  getGameByItsId,
  getGameByItsName,
};
