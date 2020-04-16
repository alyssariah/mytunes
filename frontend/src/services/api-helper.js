import axios from "axios"

const api = axios.create({
    baseURL: "https://alyssa-favorite-music.herokuapp.com"
  });

  export const getAllFavorites = async () => {
    const resp = await api.get("/favorites");
    return resp.data;
  };
  
  export const deleteFavorite = async id => {
    const resp = await api.delete(`/favorites/${id}`);
    return resp.data;
  };
  
  export const createFavorite = async track => {
    const resp = await api.post("/favorites", track);
    return resp.data;
  };