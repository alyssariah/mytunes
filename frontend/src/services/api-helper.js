import axios from "axios"

const api = axios.create({
    baseURL: "https://alyssa-favorite-music.herokuapp.com/favorites"
  });