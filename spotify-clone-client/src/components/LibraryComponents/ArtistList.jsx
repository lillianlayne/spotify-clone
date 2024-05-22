import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { getArtistInfo } from "../../services/SpotifyApi/MusicServices";
import { useClick } from "../../context/clickContext";

const ArtistList = () => {
  const { userData } = useUser();
  const [loaded, setLoaded] = useState(false);
  const [artists, setArtists] = useState([]);
  const prevLikedArtistRef = useRef([]);
  const { click } = useClick();

  const fetchArtistData = async (data) => {
    data.forEach((artist) => {
      getArtistData(artist.content);
    });
  };

  const getArtistData = async (id) => {
    const fetchedData = await getArtistInfo(id);
    setArtists((prev) => [...prev, fetchedData]);
  };

  const setStateData = (data) => {
    const dataSet = fetchArtistData(data.likedArtists);
    console.log(dataSet);
  };

  useEffect(() => {
    if (userData) {
      const likedArtist = userData.likedArtists;
      const prevLikedArtist = prevLikedArtistRef.current;

      if (JSON.stringify(likedArtist) !== JSON.stringify(prevLikedArtist)) {
        fetchArtistData(likedArtist);
        prevLikedArtistRef.current = likedArtist;
      }
    }
  }, [click]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {artists.map((artist, idx) => (
        <div key={idx}>
          <Link to={`/artist/${artist.id}`}>
            <div className="flex flex-col items-center justify-start gap-2">
              <img
                className="rounded-full"
                src={artist.images[0].url}
                alt=""
                loading="lazy"
              />
              <div className="subtitle">{artist.name}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArtistList;
