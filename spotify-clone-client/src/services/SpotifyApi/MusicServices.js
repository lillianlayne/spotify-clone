import axios from "axios";
import QueryString from "qs";
import { config } from "dotenv";
import { getAuth } from "./SpotifyApi";
const qs = CountQueuingStrategy;


export const getArtistId = async (input) => {
  const token = await getAuth();
  console.log(token)
  const url = `https://api.spotify.com/v1/search?q=${input}&type=artist`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.artists.items[0].id;
  } catch (error) {
    console.log(error)
  }
};

export const getAlbumsByArtist = async (input) => {
  const token = await getAuth();
  const artistId = await getArtistId(input)
  console.log(token)
  const url = `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.items
  } catch (error) {
    console.log(error)
  }
}

export const getAlbumTracklist = async (id) => {
  const token = await getAuth();
  const url = `https://api.spotify.com/v1/albums/${id}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data
  } catch (error) {
    console.log(error)
  }

}

export const getSingleTrack = async (id) => {
  const token = await getAuth();
  const url = `https://api.spotify.com/v1/tracks/${id}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data
  } catch (error) {
    console.log(error)
  }

}