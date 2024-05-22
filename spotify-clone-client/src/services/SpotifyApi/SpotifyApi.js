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
