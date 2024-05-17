import React, { useState, useEffect } from "react";
import Icons from "./Icons";
import { useUser } from "../context/userContext";
import { addToLikedList } from "../services/UserServices";
import { GetUser } from "../services/UserServices";

const FollowButton = ({ action, value }) => {
  const { userData, setUserData } = useUser();
  const [active, activate] = useState(false);

  const resetUserData = async (id) => {
    const userData = await GetUser(id);
    setUserData(userData)
  }

  const handleClick = (e) => {
    console.log(e.target.value);
    if (active) {
      // console.log("remove artist");
      activate(false)
    }
    if (!active) {
      console.log("add artist");
      addToLikedList(action, userData._id, {content: e.target.value})
      activate(true)
    }
  };

  useEffect(() => {
    resetUserData(userData._id)
  }, [active])

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
