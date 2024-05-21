import React, { useState } from "react";
import { addToLikedList, addToPlaylist } from "../../services/UserServices";
import Favorite from "../Favorite";
import Icons from "../Icons";
import { useUser } from "../../context/userContext";
import AddToPlaylistBtn from "./AddToPlaylistBtn";

const TrackMenu = ({ id, open, liked, playlists }) => {
  const { userData, setUserData } = useUser();
  const [openList, setOpenList] = useState("hidden");
  const openPlaylists = (e) => {
    e.preventDefault();

    if (openList === "hidden") {
      setOpenList("flex")
    } else {
      setOpenList("hidden")
    }
  };

  const addToList = async (e) => {
    e.preventDefault();
    const data = {
      content: id
    }
    const listId = e.target.value
 
    try {
      addToPlaylist(listId, data)
    } catch (error) {
      console.log(error)
    }
  }

  return open ? (
    <div className="accordion-down flex flex-col p-4 rounded-2xl mt-4 raised-inset bg-stone-800">
      <div className="justify-start gap-4 flex border-b py-2 border-stone-700 ">
        {liked ? (
          <div className="flex items-center gap-2">
            <Favorite type="songs" itemId={id} />
            <div className="subtitle">remove from liked</div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Favorite type="songs" itemId={id} />
            <div className="subtitle">add to liked</div>
          </div>
        )}
      </div>
      <div className="cursor-pointer flex flex-col gap-4 py-3 border-b border-stone-700">
        <div
          onClick={openPlaylists}
          className="flex gap-2 items-center text-stone-400"
        >
          <Icons type="add" stroke="currentColor" fill="none" />
          <div className="subtitle text-white">add to playlist</div>
        </div>
      <div className={`flex flex-col gap-3 mt-2 ${openList}`}>
        {playlists.map((list) => (
        <AddToPlaylistBtn key={list._id} value={list._id} songId={id} playlist={list} name={list.name}/>
        
        // <button value={list._id} onClick={addToList} key={list._id} className="text-left w-full p-4 bg-stone-700 rounded-lg">
          //   <div className="subtitle pointer-events-none">{list.name}</div>
          // </button>
        ))}
      </div>
      </div>
    </div>
  ) : (
    <div className="hidden accordion-up"></div>
  );
};

export default TrackMenu;
