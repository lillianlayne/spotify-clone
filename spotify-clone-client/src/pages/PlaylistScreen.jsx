import React, { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import { GetUser } from "../services/UserServices";
import { getSingleTrack } from "../services/SpotifyApi/SpotifyApi";

const PlaylistScreen = ({ user }) => {
  const [playlistData, setPlaylistData] = useState([]);
  const [songData, setSongData] = useState([]);

  const fetchSongs = async () => {
    const fetchedSongs = playlistData.map((data) => {
      return data.content;
    });

    const songInfo = fetchedSongs.map((id) => {
      const data =  getSingleTrack(id);
      return data
    })
  
    setSongData(songInfo)
  };

  const getUserData = async () => {
    const userData = await GetUser(user.id);
    setPlaylistData(userData.likedSongs);
    await fetchSongs();
  };

  useEffect(() => {
    getUserData();
  }, []);


  return (
    <div>
      <div className="btn rounded-full border text-sm border-stone-400 w-fit py-1 px-4">
        Songs
      </div>
    </div>
  );
};

export default PlaylistScreen;
