import { useEffect, useState } from "react";
import getPlaylist from "../api";
import storage from "../utils/Storage";

const usePlaylist = () => {
  const initValue = {
    playlists: {},
    recentPlaylists: [],
    favoriutes: [],
  };

  const [state, setState] = useState(initValue);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getPlaylistById = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) {
      return;
    }

    setLoading(true);

    try {
      const playlist = await getPlaylist(playlistId);
      setError("");
      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistId]: playlist,
        },
      }));
    } catch (e) {
      setError(e.response?.data.error?.message || "Somethintg went wrong");
    } finally {
      setLoading(false);
    }
  };

  const addToRecents = (playlistId) => {
    setState((prev) => ({ ...prev, recentPlaylists: [...prev, playlistId] }));
  };

  const addToFavourites = (playlistId) => {
    setState((prev) => ({ ...prev, favoriutes: [...prev, playlistId] }));
  };

  const getPlayListsByIds = (ids = []) => {
    return ids.map((id) => state.playlists[id]);
  };

  const STORAGE_KEY = "yt__playlist";

  useEffect(() => {
    const data = storage.get(STORAGE_KEY);

    if (data) {
      setState({ ...data });
    }
  }, []);

  useEffect(() => {
    if (state !== initValue) {
      storage.save(STORAGE_KEY, state);
    }
  }, [state]);

  return {
    playlists: state.playlists,
    favoriutes: getPlayListsByIds(state.favoriutes),
    recentPlaylists: getPlayListsByIds(state.recentPlaylists),
    getPlaylistById,
    addToRecents,
    addToFavourites,
    error,
    loading,
  };
};

export default usePlaylist;
