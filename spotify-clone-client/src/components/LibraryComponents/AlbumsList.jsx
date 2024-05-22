import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { getAlbumTracklist } from "../../services/SpotifyApi/MusicServices";
import Loader from "../Loader";

const AlbumsList = () => {
  const { userData } = useUser();
  const [albumData, setAlbumData] = useState([]);
  const prevLikedAlbumsRef = useRef([]);
  const [loaded, setLoaded] = useState(false);

  const fetchAlbumData = async (data) => {
    data.forEach((album) => {
      getAlbumData(album.content);
    });
  };

  const getAlbumData = async (albumId) => {
    const fetchedData = await getAlbumTracklist(albumId);
    setAlbumData((prev) => [...prev, fetchedData]);
  };

  useEffect(() => {
    if (userData) {
      const likedAlbums = userData.likedAlbums;
      const prevLikedAlbums = prevLikedAlbumsRef.current;

      if (JSON.stringify(likedAlbums) !== JSON.stringify(prevLikedAlbums)) {
        fetchAlbumData(likedAlbums);
        prevLikedAlbumsRef.current = likedAlbums;
      }
    }
  }, []);

  useEffect(() => {
    if (albumData.length) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [albumData]);

  return loaded ? (
    <div className="grid grid-cols-3 gap-2">
      {albumData.map((album) => (
        <div key={album.id} className="flex mb-8 flex-col">
          <Link to={`/albums/${album.id}`}>
            <img className="mb-2" src={album.image.url} alt="" />
            <p className="title">{album.name}</p>
            <p className="caption">{album.artistDisplay.join(", ")}</p>
          </Link>
        </div>
      ))}
    </div>
  ) : (
    <Loader />
  );
};

export default AlbumsList;
