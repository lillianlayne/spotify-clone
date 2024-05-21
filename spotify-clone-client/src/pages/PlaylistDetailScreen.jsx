import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  getSpotifyPlaylistInfo,
  getPlaylistCoverImage,
} from "../services/SpotifyApi/MusicServices";
import TrackCard from "../components/cardComponents/TrackCard";
import IndividualSongAndMenu from "../components/TrackComponents/IndividualSongAndMenu";
import { Parallax } from "react-scroll-parallax";

const PlaylistDetailScreen = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [info, setInfo] = useState(null);
  const [tracks, setTracks] = useState(null);
  const scrollRef = useRef(null);

  const fetchInfo = async () => {
    const fetchedInfo = await getPlaylistCoverImage(id);
    const fetchedTracks = await getSpotifyPlaylistInfo(id);
    setInfo(fetchedInfo);
    setTracks(fetchedTracks.items);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    if (tracks && info) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [tracks, info]);

const handleScroll = (e) => {
  const scrollPosition = window.scrollY;
  console.log(scrollPosition)
}

  return loaded ? (
    <div className="relative w-full h-screen no-scrollbar flex items-bottom justify-center ">
      <div className="div h-[1000px]"></div>
      <div className="w-full fixed top-0 z-0">
        <img src={info.images[0].url} alt="" className="w-full" />
      </div>
      <div className="w-full h-[95%] z-10 bg-stone-900 bottom-[-45%] absolute overflow-scroll pb-36 rounded-t-3xl no-scrollbar ">
        <div className="container pt-8">
          <div className="main-title">{info.name}</div>
          <div className="text-sm font-thin text-stone-400">
            {info.description}
          </div>
          <div className="pt-8 flex flex-col gap-2">
            {tracks.map((song) => (
              <IndividualSongAndMenu
                key={song.track.id}
                track={song.track.id}
                name={song.track.name}
                explicit={song.track.explicit}
                image={song.track.album.images[0].url}
                artists={song.track.artists}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>loading</h1>
  );
};

export default PlaylistDetailScreen;
