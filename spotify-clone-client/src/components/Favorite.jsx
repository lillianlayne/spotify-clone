import React, { useEffect, useState } from "react";
import Icons from "./Icons";
import { useUser } from "../context/userContext";
import { addToLikedList, removeFromLikedList } from "../services/UserServices";
import { GetUser } from "../services/UserServices";

const Favorite = ({ type, itemId }) => {
  const { userData, setUserData } = useUser();
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
    } catch (error) {
      console.log(error);
    }
  };

  const remove = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    try {
      removeFromLikedList(type, userData._id, { content: e.target.value });
      setLiked(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkLiked(type, itemId);
  }, []);

  useEffect(() => {
    // checkLiked(type, itemId)
    resetUserData(userData._id)
  }, [liked])

  return liked ? (
    <div>
      <button value={itemId} onClick={(e) => remove(e)}>
        <Icons type="heart" fill="currentColor" />
      </button>
    </div>
  ) : (
    <div>
      <button value={itemId} onClick={(e) => add(e)}>
        <Icons type="heart" stroke="currentColor" />
      </button>
    </div>
  );
};

export default Favorite;
