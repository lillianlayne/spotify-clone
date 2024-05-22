import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArtistInfo } from "../services/SpotifyApi/MusicServices";
import Loader from "../components/Loader";
import { getAllArtistInfo } from "../services/SpotifyApi/ArtistInfo";


const ArtistScreen = () => {
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);
  const [loaded, setLoaded] = useState(false)

  const fetchArtistInfo = async (artistId) => {
    const fetchedData = await getAllArtistInfo(artistId);

    setArtistData(fetchedData)
  }

  useEffect(() => {
    fetchArtistInfo(id)
  }, [])

  useEffect(() => {
    if (artistData) {
      setLoaded(true)
    } else {
      setLoaded(false)
    }
  }, [artistData])


  return loaded ? (
    <div className="w-full">
      {/* <div className="w-full aspect-square">
        <img src={artistData.images[0].url} alt="" className="absolute" />
        <div className="text-[64px]">
          {artistData.name}
        </div>

      </div> */}
    </div>
  ) : <Loader />
};

export default ArtistScreen;
