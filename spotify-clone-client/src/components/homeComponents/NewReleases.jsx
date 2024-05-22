import React, { useState, useEffect } from "react";
import { getNewReleases } from "../../services/SpotifyApi/CategoryServices";
import { useNavigate, Link } from "react-router-dom";

const NewReleases = () => {
  const [loaded, setLoaded] = useState(false)
  const [newReleases, setNewReleases] = useState([]);

  const fetchNewReleases = async () => {
    const releaseData = await getNewReleases();
    setNewReleases(releaseData);
  };


  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    fetchNewReleases();
  }, [loaded]);

  return (
    <div className="container-overflow flex gap-1 flex-col items-start w-full">
      <h1 className="title container">New Releases</h1>
      <div className="w-full flex gap-2 flex-row justify-start h-64 no-scrollbar overflow-scroll">
        {newReleases.map((album) => (
         <div key={album.id} className="first-card w-48 flex-shrink-0">
          <Link to={`/albums/${album.id}`}>
            <div className="flex flex-col gap-4 p-4 h-full glass-card">
              <div className="w-full">
              <img src={album.images[0].url} alt="" loading="lazy"/>
              </div>
              <div className="flex flex-col">
                <div className="subtitle">
                  {
                    album.name
                  }
                </div>
                <div className="caption">
                  {album.artists[0].name}
                </div>
              </div>
            </div>
          </Link>
         </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
