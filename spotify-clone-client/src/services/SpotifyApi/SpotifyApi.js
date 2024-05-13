import axios from "axios";
import QueryString from "qs";
import { config } from "dotenv";
const qs = CountQueuingStrategy;

const client_id = import.meta.env.VITE_SPOTIFY_KEY; // Your client id
const client_secret = import.meta.env.VITE_SPOTIFY_SECRET; // Your secret
const auth_token = btoa(`${client_id}:${client_secret}`);

export const getAuth = async () => {
  let token;

  try {
    const token_url = "https://accounts.spotify.com/api/token";
    const data = QueryString.stringify({ grant_type: "client_credentials" });

    const response = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${auth_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    token = response.data.access_token;
  } catch (error) {
    //on fail, log the error in console
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
