import React from "react";
import { useState, useEffect } from "react";
import useAccessToken from "../hooks/useAccessToken";
import { useParams } from "react-router-dom";
import { spotifyToken, addSongs } from "../services/SpotifyToken";
import axios from "axios";
import { BASE_URL, USER_PATH } from "../global";

const AlbumView = ({ user, token }) => {
  let { id } = useParams();

  // const [token, setToken] = useState("");
  const [songs, setSongs] = useState([]);

  

  const getSongs = async () => {
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const songResult = await fetch(
      `https://api.spotify.com/v1/albums/${id}/tracks`,
      params
    )
      .then((response) => response.json())
      .then((data) => {
        setSongs(data.items);
      });
  };

  const addSong = async (e) => {
    const params = `${USER_PATH}/${user.id}/songs`
    const data = e;

    await addSongs(data, params)
  };

  useEffect(() => {
    // const getToken = spotifyToken();
    // setToken(getToken);
    getSongs();
  }, []);

  console.log(user)
  return (
    <div>
      {songs.map((song) => (
        <div key={song.id} className="container flex flex-row justify-between">
          <h1>{song.name}</h1>
          <button onClick={(e) => addSong(e.target.value)} value={song.id}>add</button>
        </div>
      ))}
    </div>
  );
};

export default AlbumView;
