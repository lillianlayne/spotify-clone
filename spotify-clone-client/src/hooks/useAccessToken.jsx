import { useState, useEffect } from "react"
const spotifyKey = import.meta.env.VITE_SPOTIFY_KEY;
const spotifySecret = import.meta.env.VITE_SPOTIFY_SECRET;

const useAccessToken = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
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
      .then((data) => setToken(data.access_token));
  }, []);


  return token
}

export default useAccessToken
