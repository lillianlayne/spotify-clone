import React, { useState, useEffect, useRef } from "react";
import { getSingleTrack } from "../../services/SpotifyApi/MusicServices";
import TrackDisplay from "../TrackDisplay";
import { useUser } from "../../context/userContext";
import { Link } from "react-router-dom";

const SongsList = () => {
  const [songs, setSongs] = useState([]);
  const { userData } = useUser();
  const prevLikedSongsRef = useRef([])

  const setSongData = async (data) => {
    data.forEach((song) => {
      fetchSongData(song.content);
    });
  };
  const fetchSongData = async (songId) => {
    const fetchedData = await getSingleTrack(songId);
    setSongs((prev) => [...prev, fetchedData]);
  };

  useEffect(() => {
    if (userData) {
      const likedSongs = userData.likedSongs;
      const prevLikedSongs = prevLikedSongsRef.current
      
      if (JSON.stringify(likedSongs) !== JSON.stringify(prevLikedSongs)) {
        setSongData(likedSongs)
        prevLikedSongsRef.current = likedSongs
      }
    }
  }, [userData]);


  const getTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = (totalSeconds % 60);

    const formatted = seconds < 10 ? `0${seconds}` : seconds
    
    return `${minutes}:${formatted}`;
  };
  return (
    <div className="flex flex-col gap-4">
      {
        songs.map((song) => (
          <Link key={song.id} to={`/playing/${song.id}`}>

          <div className="flex items-center gap-4" key={song.id}>
            <div className="object-cover w-12">
              <img src={song.album.images[0].url} alt="" />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <p className="text-sm title tracking-wide">
                  {song.name}
                </p>
                <p className="caption">
                  {song.artists[0].name}
                </p>
              </div>
              <p className="text-sm">
                {getTime(song.duration)}
              </p>
            </div>
          </div>
          </Link>
        ))
      }
    </div>
  );
};

export default SongsList;
