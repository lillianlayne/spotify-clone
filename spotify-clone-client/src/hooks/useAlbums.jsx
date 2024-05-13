import React from "react";
import { useState, useEffect } from "react";
import useAccessToken from "./useAccessToken";

const useAlbums = (album_id) => {
  const [albums, setAlbums] = useState([]);
  const token = useAccessToken();

  const getAlbums = async () => {
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const albumResult = await fetch(
      `https://api.spotify.com/v1/albums/${album_id}/tracks`,
      params
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data.items);
      });
  };
  useEffect(() => {
    getAlbums();
  }, []);

  return albums;
};

export default useAlbums;
