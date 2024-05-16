import React from "react";
import { Link } from "react-router-dom";

const ArtistCard = ({ image, name, action, id, type }) => {
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

      <button className="py-1 px-2 text-sm rounded-full border border-stone-300" onClick={action} value={id}>Follow</button>
      </div>
    </div>
  );
};

export default ArtistCard;
