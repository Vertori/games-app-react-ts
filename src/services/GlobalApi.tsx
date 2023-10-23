import axios from "axios";

const key = import.meta.env.VITE_GAMES_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosInstance.get(`/genres?key=${key}`);

export default {
  getGenreList,
};
