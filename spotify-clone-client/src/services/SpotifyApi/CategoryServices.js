import axios from "axios";
import QueryString from "qs";
import { config } from "dotenv";
import { getAuth } from "./SpotifyApi";

const qs = CountQueuingStrategy;

export const getPopularPlaylists = async () => {
  const token = await getAuth();
  const url = 'https://api.spotify.com/v1/browse/featured-playlists?limit=10';

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.playlists.items
  } catch (error) {
    console.log(error)
  }
}

export const getNewReleases = async () => {
  const token = await getAuth()
  const url = 'https://api.spotify.com/v1/browse/new-releases?limit=10'

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.albums.items
  } catch (error) {
    console.log(error)
  }
}

