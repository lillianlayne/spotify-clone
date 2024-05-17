import React, { useEffect, useState } from "react";
import AlbumTracks from "./AlbumTracks";
import Icons from "./Icons";
import { useUser } from "../context/userContext";
import { addToLikedList } from "../services/UserServices";
import Favorite from "./Favorite";

const TrackDisplay = ({ addTrack, album }) => {
  const {userData} = useUser()
  const [userId, setUserId] = useState()
  const addAlbum = (e) => {
    try {
      addToLikedList('albums', userId, {content: e.target.value})
    } catch (error) {
      
    }
  };

  useEffect(() => {
    setUserId(userData._id)
  }, [])
  return (
    <div className="flex flex-col py-4 gap-4 px-6 align-center justify-center mx-auto">
      <h1 className="text-sm text-center font-semibold">{album.name}</h1>
      <img className="w-3/4 mx-auto py-2" src={album.images[0].url} alt="" />
      <div className="flex justify-between w-full">
        <div className="flex flex-col w-1/2">
          <p className="text-base leading-tight">{album.name}</p>
          <p className="text-sm mt-1">{album.artists[0].name}</p>
        </div>
        <Favorite type="albums" itemId={album.id}/>
      </div>
      <div className="flex flex-col gap-8 border-t border-stone-500 pt-4">
        {album.tracks.items.map((track) => (
          <AlbumTracks key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TrackDisplay;
