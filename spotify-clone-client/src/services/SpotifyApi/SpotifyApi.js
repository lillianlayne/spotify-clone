import axios from "axios";
import { config } from "dotenv";

const spotifyKey = import.meta.env.VITE_SPOTIFY_KEY;
const spotifySecret = import.meta.env.VITE_SPOTIFY_SECRET;

export const getSpotifyToken = () => {
  let token;
  // Get API access token
  const authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${spotifyKey}&client_secret=${spotifySecret}`,
  };
  fetch("https://accounts.spotify.com/api/token", authParameters)
    .then((result) => result.json())
    .then((data) => {
      token = data.access_token;
    });

  return token;
};
