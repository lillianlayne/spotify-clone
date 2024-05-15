import React, { useState, useEffect } from "react";
import Icons from "../components/Icons";
import SongsList from "../components/SongsList";
import AlbumsList from "../components/AlbumsList";
import ArtistList from "../components/ArtistList";
import PlaylistList from "../components/PlaylistList";
import { GetUser } from "../services/UserServices";
import { useUser } from '../context/userContext'


const LibraryScreen = ({ user }) => {
  const {userData} = useUser()
  const [view, setView] = useState("albums");
  const [loaded, setLoaded] = useState(false)
  const [userObj, setUserObj] = useState() 

  const switchView = (e) => {
    e.preventDefault();
    setView(e.target.value);
  };

  let display = <SongsList user={user} />;

  switch (view) {
    case "songs":
      display = <SongsList />;
      break;
    case "albums":
      display = <AlbumsList user={userData} />;
      break;
    case "artists":
      display = <ArtistList user={user} />;
      break;
    case "playlist":
      display = <PlaylistList user={user} />;
      break;
    default:
      display = <SongsList user={user} />;
  }


useEffect(() => {
  setUserObj(userData)
}, []);
  

  return (
    <div>
      <div className="p-4 w-full bg-[#00000045]">
        <div className="flex justify-between items-baseline w-full">
          <h1 className="text-xl font-bold">Your Library</h1>
          <div className="flex gap-4 items-baseline">
            <Icons type="search" stroke="white" fill="none" />
            <button className="text-[42px] leading-none font-thin">+</button>
          </div>
        </div>
        <div className="flex mt-4 gap-2 justify-start">
          <button
            className="text-xs leading-none tracking-widest flex justify-center items-center bg-[#ffffff20] px-2 py-1 font-thin rounded-full"
            value="songs"
            onClick={(e) => switchView(e)}
          >
            Songs
          </button>
          <button
            className="text-xs leading-none tracking-widest flex justify-center items-center bg-[#ffffff20] px-2 py-1 font-thin rounded-full"
            value="artists"
            onClick={(e) => switchView(e)}
          >
            Artists
          </button>
          <button
            className="text-xs leading-none tracking-widest flex justify-center items-center bg-[#ffffff20] px-2 py-1 font-thin rounded-full"
            value="albums"
            onClick={(e) => switchView(e)}
          >
            Albums
          </button>
          <button
            className="text-xs leading-none tracking-widest flex justify-center items-center bg-[#ffffff20] px-2 py-1 font-thin rounded-full"
            value="playlist"
            onClick={(e) => switchView(e)}
          >
            Playlist
          </button>
        </div>
      </div>
      <div>{display}</div>
    </div>
  );
};

export default LibraryScreen;
