import React, { useState, useEffect } from "react";
import { useUser } from "../context/userContext";
import { addToLikedList } from "../services/UserServices";
import { GetUser } from "../services/UserServices";

const FollowButton = ({ action, value }) => {
  const { userData, setUserData } = useUser();
  const [active, activate] = useState(false);

  const resetUserData = async (id) => {
    const userData = await GetUser(id);
    setUserData(userData);
  };

  const checkFollow = (id) => {
    const checked = userData.likedArtists.some(
      (artist) => artist.content === id
    );

    if (checked) {
      activate(true);
    } else {
      activate(false);
    }
  };

  const handleClick = (e) => {
    if (active) {
      activate(false);
    }
    if (!active) {
      addToLikedList(action, userData._id, { content: e.target.value });
      activate(true);
    }
  };

  useEffect(() => {
    checkFollow(value);
  }, []);
  useEffect(() => {
    resetUserData(userData._id);
  }, [active]);

  return active ? (
    <button
      className="py-1 px-2 text-sm rounded-full bg-stone-300 text-stone-950 border border-stone-300"
      onClick={handleClick}
      value={value}
    >
      Unfollow
    </button>
  ) : (
    <button
      className="py-1 px-2 text-sm rounded-full border border-stone-300"
      onClick={handleClick}
      value={value}
    >
      Follow
    </button>
  );
};

export default FollowButton;
