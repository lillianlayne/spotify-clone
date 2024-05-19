import React, { useState, useEffect } from "react";
import Icons from "../components/Icons";
import SongsList from "../components/LibraryComponents/SongsList";
import AlbumsList from "../components/LibraryComponents/AlbumsList";
import ArtistList from "../components/LibraryComponents/ArtistList";
import PlaylistList from "../components/LibraryComponents/PlaylistList";
import { useUser } from '../context/userContext'
import { useClick } from "../context/clickContext";


const LibraryScreen = () => {
  const {userData, setUserData} = useUser()
  const {click, setClick} = useClick()
  const [view, setView] = useState("");
  const [add, setAdd] = useState(false)

  const switchView = (e) => {
    e.preventDefault();
    setView(e.target.value);
  };

  let display = <PlaylistList create={add} />;

  switch (view) {
    case "songs":
      display = <SongsList />;
      break;
    case "albums":
      display = <AlbumsList />;
      break;
    case "artists":
      display = <ArtistList />;
      break;
    case "playlist":
      display = <PlaylistList create={add}/>;
      break;
    default:
      display = <PlaylistList create={add}/>;
  }

  const createPlaylist = (e) => {
    e.preventDefault()
    setAdd(true)
  }

useEffect(() => {
  
}, []);
  

  return (
    <div className="container">
      <div className="w-full">
        <div className="flex justify-between items-baseline">
          <h1 className="text-xl font-bold">Your Library</h1>
          <div className="flex gap-4 items-baseline">
            <Icons type="search" stroke="white" fill="none" />
            <button onClick={createPlaylist} className="text-[42px] leading-none font-thin">+</button>
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

      <div key={click} className="mt-8">{display}</div>
    </div>
  );
};

export default LibraryScreen;
