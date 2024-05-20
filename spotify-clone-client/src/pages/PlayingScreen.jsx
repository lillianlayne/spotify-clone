import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTrack } from "../services/SpotifyApi/MusicServices";
import Icons from "../components/Icons";
import Favorite from "../components/Favorite";
import PlaybackControls from "../components/cardComponents/PlaybackControls";
import { useNavigate } from "react-router-dom";

const PlayingScreen = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [artists, setArtists] = useState([]);
  const [image, setImage] = useState([]);

  const fetchTrack = async (trackId) => {
    const fetchedData = await getSingleTrack(trackId);
    artistString(fetchedData.artists);
    setImage(fetchedData.image);
    setInfo(fetchedData);
  };

  const artistString = (array) => {
    const result = array.map((item) => {
      return item.name;
    });

    setArtists(result);
  };

  const artistDisplay = (array) => {
    return array.join(", ");
  };

  const getTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formatted = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formatted}`;
  };

  const goBack = () => {
    
  }
  useEffect(() => {
    fetchTrack(id);
  }, []);

  return info ? (
    <div className="h-screen w-screen z-20 relative">
      <div className="absolute transform-center bg-stone-900 w-full object-cover h-full">
        <img
          src={image[0].url}
          className="w-full h-full opacity-25 object-cover"
          alt=""
        />
      </div>
      <div
        className="relative w-full backdrop-blur-lg
       h-full flex flex-col"
      >
        <div className="flex mt-4 justify-between container">
          <div onClick={() => navigate(-1)}>

          <Icons type="back" fill="currentColor" stroke="none" size="size-8" />
          </div>
          <div>•••</div>
        </div>
        <div className="container overflow-hidden w-full mx-auto mt-4">
          <img src={image[0].url} className="rounded-lg" alt="" />
        </div>
        <div className="container flex mt-3 justify-between items-start">
          <div className="flex flex-col">
            <p className="title">{info.name}</p>
            <p className="caption mt-1">{artistDisplay(artists)}</p>
          </div>
          <div>
            <Favorite type="songs" itemId={info.id} />
          </div>
        </div>
        <div className="container flex flex-col gap-2">
          <div className="w-full h-1 bg-stone-600 rounded-lg"></div>
          <div className="w-full flex text-stone-400 justify-between">
            <p className="caption font-medium">0:00</p>
            <p className="caption font-medium">{getTime(info.duration)}</p>
          </div>
        </div>
        <div className="container">
          <PlaybackControls />
        </div>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default PlayingScreen;
