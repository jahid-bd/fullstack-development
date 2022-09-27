import { createStore, persist } from "easy-peasy";
import favoriteModel from "./favorite-model";
import playlistModel from "./playlist-model";
import recentModel from "./recent-model";

const store = createStore({
  playlists: persist(playlistModel),
  favorites: persist(favoriteModel),
  recents: persist(recentModel),
});

export default store;
