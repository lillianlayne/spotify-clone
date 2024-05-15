import React, { useState, useEffect } from "react";
import { getNewReleases } from "../services/SpotifyApi/CategoryServices";

const NewReleases = () => {
  const [newReleases, setNewReleases] = useState([]);

  const fetchNewReleases = async () => {
    const releaseData = await getNewReleases();
    setNewReleases(releaseData.albums.items);
  };

  useEffect(() => {
    fetchNewReleases();
  }, []);

  return (
    <div className="flex gap-2 flex-col items-start w-full">
      <h1 className="text-sm">New Releases</h1>
      <div className="w-full flex gap-2 flex-row justify-start overflow-scroll">
        {newReleases.map((album) => (
          <div key={album.id} className="flex w-1/3 flex-shrink-0 flex-col items-start">
            <div className="w-full object-cover">
              <img src={album.images[0].url} alt="" />
            </div>
            <h5 className="mt-2 leading-none">{album.name}</h5>
            <p className="text-xs mt-1">{album.artists[0].name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
