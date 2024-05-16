import { useState, useEffect } from "react";
import PlaylistCard from "../cardComponents/PlaylistCard";

const PlaylistSearch = ({ data }) => {
  return (
    <div className="container-overflow">
      <p className="text-sm">Popular Playlists</p>
      <div className="flex overflow-scroll gap-2">
        {data.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistSearch;
