import { useState, useEffect } from "react";
import PlaylistCard from "./PlaylistCard";
import { Link } from "react-router-dom";

const PlaylistSearch = ({ data }) => {
  const limitedList = [data[0], data[1], data[2], data[3]]
  return (
    <div className="container">
      <p className="title mb-3">Popular Playlists</p>
      <div className="grid grid-cols-2 gap-2">
        {limitedList.map((playlist) => (
          <Link key={playlist.id} to={`/playlist/${playlist.id}`}>
          <div key={playlist.id} className="flex justify-start rounded-md overflow-hidden bg-stone-800 items-center gap-2 border h-12 border-stone-800">
            <div className="aspect-1 object-cover h-full flex-shrink-0">
            <img src={playlist.images[0].url} alt="" className="h-full w-full object-cover"/>
            </div>
            <div className="subtitle line-clamp-2">
              {playlist.name}
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlaylistSearch;
