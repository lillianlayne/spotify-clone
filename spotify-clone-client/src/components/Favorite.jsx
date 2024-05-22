import React, { useEffect, useState } from "react";
import Icons from "./Icons";
import { useUser } from "../context/userContext";
import { addToLikedList, removeFromLikedList } from "../services/UserServices";
import { GetUser } from "../services/UserServices";
import { useClick } from "../context/clickContext";

const Favorite = ({ type, itemId }) => {
  const { userData, setUserData } = useUser();
  const {click, setClick} = useClick()
  const [liked, setLiked] = useState(false);

  const resetUserData = async (id) => {
    const userData = await GetUser(id);
    setUserData(userData)
  }

  const checkLiked = (type, itemId) => {
    let typeCheck;
    if (type === "albums") {
      typeCheck = userData.likedAlbums;
    }

    if (type === 'songs') {
      typeCheck = userData.likedSongs
    }

    const checked = typeCheck.some((type) => type.content === itemId);

    if (checked) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  };

  const add = (e) => {
    e.preventDefault();
    try {
      addToLikedList(type, userData._id, { content: e.target.value });
      setLiked(true);
      setClick(prev => prev + 1)
    } catch (error) {
      console.log(error);
    }
  };

  const remove = (e) => {
    e.preventDefault();
    try {
      removeFromLikedList(type, userData._id, { content: e.target.value });
      setLiked(false);
      setClick(prev => prev + 1)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkLiked(type, itemId);
  }, []);

  useEffect(() => {
    resetUserData(userData._id)
  }, [liked])

  return liked ? (
    <div>
      <button value={itemId} onClick={(e) => remove(e)}>
        <div className="pointer-events-none">

        <Icons type="heart" fill="green" stroke="none" />
        </div>
      </button>
    </div>
  ) : (
    <div>
      <button value={itemId} onClick={(e) => add(e)}>
      <div className="pointer-events-none">
        <Icons type="heart" fill="none" stroke="currentColor" />
    </div>
      </button>
    </div>
  );
};

export default Favorite;
