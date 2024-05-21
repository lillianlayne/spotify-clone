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
  const [scrolling, setScrolling] = useState(false)
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
    if (scrollRef.current) {

      const scrollPosition = window.scrollY;
      const element = scrollRef.current.offsetTop;
      console.log(element, scrollPosition)
      if (scrollPosition > element - 100) {
        setScrolling(true)
      }
      if (scrollPosition === 0) {
        setScrolling(false)
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  return loaded ? (
    <div
      className="relative w-full h-screen no-scrollbar flex items-bottom justify-center "
    >
      <div className="w-full fixed top-0 z-0">
        <img src={info.images[0].url} alt="" className="w-full" />
      </div>
      <div
        ref={scrollRef}
        className={scrolling ? 'after-scroll' : 'before-scroll'}
      >
        <div className="relative">
          <div className={scrolling ? 'top-0 pb-4 bg-stone-900 sticky pt-6 container bottom-shadow' : 'top-0 bg-stone-900 bottom-shadow pt-6 pb-4 container'}>
            <div className=" main-title">{info.name}</div>
            <div className=" text-sm font-thin text-stone-400">
              {info.description}
            </div>
          </div>
          <div className="container pt-8 flex flex-col gap-2">
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
