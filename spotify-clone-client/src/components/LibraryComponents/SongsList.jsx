import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getTrackLoop } from "../../services/SpotifyApi/MusicServices";
import { useUser } from "../../context/userContext";
import Loader from "../Loader";

const SongsList = () => {
  const [songs, setSongs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { userData } = useUser();

  const fetchSongs = async () => {
    const fetchedData = await getTrackLoop(userData.likedSongs);
    setSongs(fetchedData);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const artistDisplay = (object) => {
    const array = object.map((artist) => {
      return artist.name;
    });

    return array.join(", ");
  };

  const getTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formatted = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formatted}`;
  };

  useEffect(() => {
    if (songs) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [songs]);

  return loaded ? (
    <div className="flex flex-col gap-4">
      {songs.map((song) => (
        <Link key={song.id} to={`/playing/${song.id}`}>
          <div className="flex items-center gap-4" key={song.id}>
            <div className="object-cover w-12">
              <img src={song.image[0].url} alt="" />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <p className="text-sm title tracking-wide">{song.name}</p>
                <p className="caption">{artistDisplay(song.artists)}</p>
              </div>
              <p className="text-sm">{getTime(song.duration)}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <Loader />
  );
};

export default SongsList;
