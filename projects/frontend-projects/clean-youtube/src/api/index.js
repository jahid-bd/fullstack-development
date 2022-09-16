import axios from "axios";
const API_kEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlaylistItem = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_kEY}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);

  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = getPlaylistItem(playlistId, data.nextPageToken, result);
  }

  return result;
};

const getPlaylist = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=id%2C%20contentDetails%2C%20snippet&id=${playlistId}&key=${API_kEY}`;

  const { data } = await axios.get(URL);
  let playlistItems = await getPlaylistItem(playlistId);

  const {
    channelId,
    channelTitle,
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
  } = data?.items[0]?.snippet;

  playlistItems = playlistItems.map((item) => {
    const {
      title,
      descripton,
      thumbnails: { medium },
    } = item.snippet;

    return {
      title,
      descripton,
      thumbnails: medium,
      contentDetails: item.contentDetails,
    };
  });

  return {
    playlistTitle,
    playlistId,
    playlistDescription,
    playlistThumbnail: thumbnails.default,
    channelId,
    channelTitle,
    playlistItems,
  };
};

export default getPlaylist;
