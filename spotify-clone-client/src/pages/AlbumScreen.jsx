import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbumTracklist } from "../services/SpotifyApi/MusicServices";
import TrackDisplay from "../components/TrackDisplay";
import { addToLikedList } from "../services/UserServices";
import { useUser } from "../context/userContext";

const AlbumScreen = ({ user }) => {

  const { id } = useParams();
  const [songId, setSongId] = useState(null);
  const [album, setAlbum] = useState();

  const fetchAlbum = async (songId) => {
    const fetchedData = await getAlbumTracklist(songId);
    setAlbum(fetchedData);
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
    <div className="relative h-screen overflow-hidden">
      <div className="absolute blur-2xl -z-10 h-screen object-cover opacity-20">
        {album ? 
      <img className="h-full object-cover" src={album.images[0].url} alt="" /> : null  
      }
      </div>
      <div className="absolute h-full overflow-scroll pb-20">
      {
        album ? 
        <TrackDisplay album={album}/> : null
      }
      </div>
    </div>
  );
};

export default AlbumScreen;
