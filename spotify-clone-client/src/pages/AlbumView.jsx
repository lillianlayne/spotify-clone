import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { spotifyToken, addSongs } from "../services/SpotifyToken";
import { BASE_URL, USER_PATH } from "../global";
import useSongs from "../hooks/useSongs";
// import { addSongs } from "../services/SpotifyToken";

const AlbumView = ({ user, token }) => {
  let { id } = useParams();

  const songs = useSongs(id);
  console.log(songs);

  const addSong = async (e) => {
    const params = `${USER_PATH}/${user.id}/songs`;
    const data = e;
    await addSongs(data, params);
  };

  return (
    <div>
      {songs.map((song) => (
        <div key={song.id} className="container flex flex-row justify-between">
          <h1>{song.name}</h1>
          <button onClick={(e) => addSong(e.target.value)} value={song.id}>
            add
          </button>
        </div>
      ))}
    </div>
  );
};

export default AlbumView;
