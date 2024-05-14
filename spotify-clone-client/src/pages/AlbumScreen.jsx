import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbumTracklist } from "../services/SpotifyApi/SpotifyApi";
import {
  getAuth,
  getArtistId,
  getAlbumsByArtist,
} from "../services/SpotifyApi/SpotifyApi";
import TrackDisplay from "../components/TrackDisplay";
import { addToLikedSongs } from "../services/UserServices";
import { useUser } from "../context/userContext";

const AlbumScreen = ({user}) => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [albumInfo, setAlbumInfo] = useState([]);
  const [albumArt, setAlbumArt] = useState([]);
  const [trackId, setTrackId] = useState("");
  
 

  const getInfo = async () => {
    const fetchedData = await getAlbumTracklist(id);
    try {
      setAlbumArt(fetchedData.images);
      setAlbumInfo(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setTrackId(e.target.value);
    try {
      await addToLikedSongs(user.id, { content: e.target.value });
    } catch (error) {
      console.log(error);
    }
  };

  let image;
  let trackList;

  if (loaded) {
    image = <img src={albumArt[0].url} alt="" loading="lazy" />;

    trackList = albumInfo.tracks.items.map((track) => (
      <TrackDisplay
        key={track.id}
        addTrack={(e) => handleAdd(e)}
        track={track}
      />
    ));
  }

  useEffect(() => {
    getInfo();
    if (albumInfo && albumArt.length) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className="flex flex-col py-4 gap-4 px-6 align-center justify-start mx-auto">
      <h6 className="text-center">{albumInfo.name}</h6>
      {image}
      <div className="mx-auto w-3/4"></div>
      <div className="flex-col">
        {trackList}
      </div>
    </div>
  );
};

export default AlbumScreen;
