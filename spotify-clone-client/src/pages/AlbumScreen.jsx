import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbumTracklist } from "../services/SpotifyApi/MusicServices";
import TrackDisplay from "../components/TrackDisplay";
import { addToLikedSongs } from "../services/UserServices";
import { useUser } from "../context/userContext";

const AlbumScreen = ({ user }) => {
  const { id } = useParams();
  const [songId, setSongId] = useState(null);
  const [album, setAlbum] = useState();

  const fetchAlbum = async (songId) => {
    const fetchedData = await getAlbumTracklist(songId);
    setAlbum(fetchedData);
  };

  const addTrack = async (e) => {
    console.log(e.target);
  };

  useEffect(() => {
    setSongId(id);
  }, []);

  useEffect(() => {
    if (songId !== null) {
      fetchAlbum(songId);
    }
  }, [songId]);


  return (
    <div className="relative">
      <div className="absolute blur-3xl -z-10 h-screen object-cover opacity-50">
        {album ? 
      <img className="h-full object-cover" src={album.images[0].url} alt="" /> : null  
      }
      </div>
      {
        album ? 
        <TrackDisplay addTrack={addTrack} album={album}/> : null
      }
    </div>
  );
};

export default AlbumScreen;
