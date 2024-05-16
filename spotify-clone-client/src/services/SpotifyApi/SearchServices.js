import axios from "axios";
import { getAuth } from "./SpotifyApi";

export const getSearchResults = async (input) => {
  const token = await getAuth();
  const searchInput = input.replace(" ", "+").toLowerCase();
  const url = `https://api.spotify.com/v1/search?q=${searchInput}&type=album%2Cplaylist%2Ctrack%2Cartist`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      albums: response.data.albums.items,
      artists: response.data.artists.items,
      tracks: response.data.tracks.items,
      playlists: response.data.playlists.items,
    }
  } catch (error) {
    console.log(error);
  }
};

