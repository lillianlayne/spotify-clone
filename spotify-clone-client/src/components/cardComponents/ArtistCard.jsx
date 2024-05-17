import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import FollowButton from "../FollowButton";

const ArtistCard = ({ image, name, action, id, type }) => {
  const [active, activate] = useState(false)
  

  return (
    <div className="flex w-full items-center gap-2">
      <div className="rounded-full h-14 aspect-square overflow-hidden">
        <img className="w-full h-full object-cover" src={image[0].url} alt={name} />
      </div>
      <div className="flex justify-between items-center w-full">

      <div className="flex flex-col">
        <p className="text-sm text-center">{name}</p>
        <p className="text-xs">{type}</p>
      </div>

      <FollowButton action="artists" value={id}/>
      </div>
    </div>
  );
};

export default ArtistCard;
