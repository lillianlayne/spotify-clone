import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbumTracklist } from "../services/SpotifyApi/MusicServices";
import TrackDisplay from "../components/TrackDisplay";
import { addToLikedList } from "../services/UserServices";
import { useUser } from "../context/userContext";
import Favorite from "../components/Favorite";
import IndividualSongAndMenu from "../components/TrackComponents/IndividualSongAndMenu";

const AlbumScreen = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [albumData, setData] = useState(null);

  const fetchData = async (dataId) => {
    const fetchedData = await getAlbumTracklist(dataId);
    setData(fetchedData);
  };

  useEffect(() => {
    if (albumData) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [albumData]);

  useEffect(() => {
    fetchData(id);
  }, []);
  return loaded ? (
    <div className="w-full pb-56">
      <div className="sticky z-0 top-0 w-full">
        <img src={albumData.image.url} alt="" />
      </div>
      <div className="container rounded-t-3xl sticky top-0 z-10 pt-8 bg-stone-900 gap-10 flex flex-col">
        <div className=" flex justify-between">
          <div className="flex flex-col">
            <div className="text-base">{albumData.name}</div>
            <div className="caption">{albumData.artistDisplay.join(", ")}</div>
          </div>
          <div>
            <Favorite type="albums" itemId={id} />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {albumData.tracks.map((track) => (
            <IndividualSongAndMenu
              key={track.name}
              track={track.id}
              name={track.name}
              artists={track.artists}
              explicit={track.explicit}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

// const AlbumScreen = ({ user }) => {
//   const { id } = useParams();
//   const [songId, setSongId] = useState(null);
//   const [album, setAlbum] = useState();
//   const [tracks, setTracks] = useState(null)

//   const fetchAlbum = async (songId) => {
//     const fetchedData = await getAlbumTracklist(songId);
//     setAlbum(fetchedData);
//     setTracks(fetchedData.tracks.items)
//   };

//   useEffect(() => {
//     setSongId(id);
//   }, []);

//   useEffect(() => {
//     if (songId !== null) {
//       fetchAlbum(songId);
//     }
//   }, [songId]);

//   return (
//     <div className="relative h-screen overflow-hidden">
//       <div className="absolute blur-2xl -z-10 h-screen object-cover opacity-20">

//       </div>
//     </div>
//   );
// };

export default AlbumScreen;
