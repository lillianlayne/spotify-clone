const spotifyKey = import.meta.env.VITE_SPOTIFY_KEY;
const spotifySecret = import.meta.env.VITE_SPOTIFY_SECRET;
import Client from './Api'


export const spotifyToken = () => {

  let token;
  // Get API access token
  var authParameters = {
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

export const addSongs = async (data, params) => {
  try {
    const res = await Client.post(params, data)
    return res.data
  } catch (error) {
    throw error
  }
}