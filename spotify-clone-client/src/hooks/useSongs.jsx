import React from "react";
import { useState, useEffect } from "react";
import useAccessToken from "./useAccessToken";

const useSongs = (album_id) => {
  const [songs, setSongs] = useState([]);
  const token = useAccessToken();

  const getSongs = async () => {
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const songResult = await fetch(
      `https://api.spotify.com/v1/albums/${album_id}/tracks`,
      params
    )
      .then((response) => response.json())
      .then((data) => {
        setSongs(data.items);
      });
  };
  useEffect(() => {
    getSongs();
  }, []);

  return songs;
};

export default useSongs;
