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
    <div className="container-overflow flex gap-2 flex-col items-start w-full">
      <h1 className="text-base font-med">New Releases</h1>
      <div className="w-full flex gap-2 flex-row justify-start overflow-scroll">
        {newReleases.map((album) => (
          <div key={album.id} onClick={(e) => handleClick(e)} className="flex w-2/5 relative card-bg border p-2 rounded-lg flex-shrink-0 flex-col border-stone-700 items-start overflow-hidden">
            
            <Link to={`albums/${album.id}`}>

            <div className="object-cover ">
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
