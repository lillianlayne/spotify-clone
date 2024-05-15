import React, { useEffect, useState } from "react";
import { GetUser } from "../services/UserServices";
import { getSingleTrack } from "../services/SpotifyApi/MusicServices";
import SongsList from "../components/SongsList";

const PlaylistScreen = ({ user }) => {
  const [playlistData, setPlaylistData] = useState([]);
  const [isSet, setIsSet] = useState(false)
  const [songIds, setSongIds] = useState([]);
  const [songData, setSongData] = useState([])

  const getUserData = async () => {
    const userData = await GetUser(user.id);
    setPlaylistData(userData.likedSongs);
  };

  const fetchSongIds = async () => {
    if (playlistData.length) {
      const fetchedSongs = playlistData.map((data) => {
        return data.content;
      });

      setSongIds(fetchedSongs);
    }
  };

  const fetchSongData = async (songId) => {
    const songData = await getSingleTrack(songId);
    setSongData((prev) => [...prev, songData])
  }

  useEffect(() => {
    getUserData();
    setIsSet(true)
  }, []);
 
  useEffect(() => {
    fetchSongIds()
    songIds.forEach((song) => {
      fetchSongData(song)
    })
  }, [playlistData]);

  // useEffect(() => {
  //   songIds.forEach((song) => {
  //     fetchSongData(song)
  //   })
  // }, );


  return (
    <div className="py-4 px-8">
      <div className="btn rounded-full border text-sm border-stone-400 w-fit py-1 px-4">
        Songs
      </div>
      <div className="flex flex-col gap-4">
        {
        songData.map((song) => (
          <SongsList key={song.id} track={song} />
        ))
        }
      </div>
    </div>
  );
};

export default PlaylistScreen;
