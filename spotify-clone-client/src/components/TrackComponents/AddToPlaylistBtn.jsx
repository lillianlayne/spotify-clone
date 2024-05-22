import React, { useEffect, useState } from "react";
import { useUser } from "../../context/userContext";
useUser;
import { useClick } from "../../context/clickContext";
import Icons from "../Icons";
import { addToPlaylist } from "../../services/UserServices";
import { GetUser } from "../../services/UserServices";

const AddToPlaylistBtn = ({ value, name, playlist, songId }) => {
  const { userData, setUserData } = useUser();
  const { click, setClick } = useClick();
  const [added, setAdded] = useState(false);

  const resetUserData = async (id) => {
    const userData = await GetUser(id);
    setUserData(userData);
  };

  const checkSong = (itemId) => {
    const checked = playlist.songs.some((song) => {
      return song.content === itemId
    });
    if (checked) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  };

  const addToList = async (e) => {
    e.preventDefault();
    const data = {
      content: songId,
    };
    const listId = e.target.value;

    try {
      addToPlaylist(listId, data);
    } catch (error) {
      console.log(error);
    }
    setAdded(true);

    setClick((prev) => prev + 1);
  };
  const removeFromList = () => {
    setAdded(false)
    setClick((prev) => prev + 1);
  };

  useEffect(() => {
    checkSong(songId);
  }, []);
  
  useEffect(() => {
    resetUserData(userData._id);
  }, [added]);

  return added ? (
    <button
      value={value}
      onClick={removeFromList}
      className="text-left w-full p-4 bg-stone-700 rounded-lg"
    >
      <div className="subtitle pointer-events-none flex w-full justify-between items-center">
        {name}
        <Icons type="check" stroke="none" fill="green" />
      </div>
    </button>
  ) : (
    <button
      value={value}
      onClick={addToList}
      className="text-left w-full p-4 bg-stone-700 rounded-lg"
    >
      <div className="subtitle pointer-events-none flex w-full justify-between items-center">
        {name}
        <Icons type="add" stroke="currentColor" fill="none" />
      </div>
    </button>
  );
};

export default AddToPlaylistBtn;
