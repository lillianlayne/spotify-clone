import React, { useState } from "react";
import { addToLikedList, addToPlaylist } from "../../services/UserServices";
import Favorite from "../Favorite";
import Icons from "../Icons";
import { useUser } from "../../context/userContext";
import AddToPlaylistBtn from "./AddToPlaylistBtn";

const TrackMenu = ({ id, open, liked, playlists, closeDrawer, name, image }) => {
  const { userData, setUserData } = useUser();
  const [openList, setOpenList] = useState("hidden");
  const openPlaylists = (e) => {
    e.preventDefault();

    if (openList === "hidden") {
      setOpenList("flex");
    } else {
      setOpenList("hidden");
    }
  };

  const addToList = async (e) => {
    e.preventDefault();
    const data = {
      content: id,
    };
    const listId = e.target.value;

    try {
      addToPlaylist(listId, data);
    } catch (error) {
      console.log(error);
    }
  };

  return open ? (
    <div id="outside"
      onClick={closeDrawer}
      className="fixed animate-drawer-open w-full h-screen transform-center flex items-end"
    >
      <div id="inside" className="bg-[#00000070] backdrop-blur-md w-full h-3/4  rounded-t-[64px] pt-10 px-8">
        <div className="flex flex-col items-center gap-4 mb-8">

          <img src={image} alt="" className="size-32"/>
          <div className="main-title text-center">
            {name}
          </div>
        </div>
        <div className="justify-start gap-4 flex border-b py-2 border-stone-700">
          {liked ? (
            <div className="flex items-center gap-2">
              <Favorite type="songs" itemId={id} />
              <div className="subtitle font-thin">remove from liked</div>
            </div>
          ) : (
            <div className="flex items-center  gap-2">
              <Favorite type="songs" itemId={id} />
              <div className="subtitle font-thin">add to liked</div>
            </div>
          )}
        </div>
        <div className="cursor-pointer flex flex-col gap-4 py-3 border-b border-stone-700">
          <div
            onClick={openPlaylists}
            className="flex gap-2 items-center text-stone-400"
          >
            <Icons type="add" stroke="currentColor" fill="none" />
            <div className="subtitle font-thin text-white">add to playlist</div>
          </div>
          <div className={`flex flex-col gap-3 mt-2 ${openList}`}>
            {playlists.map((list) => (
              <AddToPlaylistBtn
                key={list._id}
                value={list._id}
                songId={id}
                playlist={list}
                name={list.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="hidden animate-drawer-close"></div>
  );
};

export default TrackMenu;
