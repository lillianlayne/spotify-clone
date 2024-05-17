import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArtistInfo } from "../services/SpotifyApi/MusicServices";

const ArtistScreen = () => {


  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);

  const fetchArtistInfo = async (artistId) => {
    const fetchedData = await getArtistInfo(artistId);

    setArtistData(fetchedData)
  }

  useEffect(() => {
    fetchArtistInfo(id)
  }, [])
  return <div>{id}</div>;
};

export default ArtistScreen;
