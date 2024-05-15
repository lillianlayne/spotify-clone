import axios from "axios";
import QueryString from "qs";
import { config } from "dotenv";
const qs = CountQueuingStrategy;

const spotifyKey = import.meta.env.VITE_SPOTIFY_KEY;
const spotifySecret = import.meta.env.VITE_SPOTIFY_SECRET; 
const spotifyToken = btoa(`${spotifyKey}:${spotifySecret}`);

export const getAuth = async () => {
  let token;

  try {
    const token_url = "https://accounts.spotify.com/api/token";
    const data = QueryString.stringify({ grant_type: "client_credentials" });

    const response = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${spotifyToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    token = response.data.access_token;
  } catch (error) {
    console.log(error);
  }

  return token;
};

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
  } catch (error) {}
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
  } catch (error) {}
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
  } catch (error) {}

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
  } catch (error) {}

}


