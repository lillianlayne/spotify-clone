import React, { useState, useEffect } from "react";
import { getNewReleases } from "../services/SpotifyApi/CategoryServices";
import { useNavigate, Link } from "react-router-dom";

const NewReleases = () => {
  let navigate = useNavigate()
  const [newReleases, setNewReleases] = useState([]);

  const fetchNewReleases = async () => {
    const releaseData = await getNewReleases();
    setNewReleases(releaseData.albums.items);
  };

  const handleClick = (e) => {
    console.log(e)
    // navigate(`/albums/$`)
  }

  useEffect(() => {
    fetchNewReleases();
  }, []);

  return (
    <div className="flex gap-2 flex-col items-start w-full">
      <h1 className="text-sm">New Releases</h1>
      <div className="w-full flex gap-2 flex-row justify-start overflow-scroll">
        {newReleases.map((album) => (
          <div key={album.id} onClick={(e) => handleClick(e)} className="flex w-1/3 flex-shrink-0 flex-col items-start">
            <Link to={`albums/${album.id}`}>

            <div className="w-full object-cover">
              <img src={album.images[0].url} alt="" />
            </div>
            <h5 className="mt-2 text-sm pr-2 leading-none">{album.name}</h5>
            <p className="text-xs mt-1">{album.artists[0].name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
