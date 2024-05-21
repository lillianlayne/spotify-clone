import { useEffect, useState } from "react";
import Icons from "../Icons";
import { useUser } from "../../context/userContext";
import { useClick } from "../../context/clickContext";
import TrackMenu from "./TrackMenu";
import { data } from "autoprefixer";
import {
  getUserPlaylists,
  getUserPlaylistsLoop,
} from "../../services/UserServices";

const IndividualSongAndMenu = ({ track, name, artists, explicit, image }) => {
  const { userData, setUserData } = useUser();
  const { click, setClick } = useClick();
  const [loaded, setLoaded] = useState(false);
  const [checked, setChecked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const [userPlaylists, setUserPlaylists] = useState(null);

  // check if the user has this song in their liked lists already
  const checkLiked = async (songId) => {
    const checked = userData.likedSongs.some((song) => song.content === songId);

    if (checked) {
      setLiked(true);
    } else {
      setLiked(false);
    }

    setChecked(true);
  };

  const fetchPlaylists = async () => {
    const fetchedData = await getUserPlaylistsLoop(userData.playlists);
    setUserPlaylists(fetchedData);
  };

  // set the artist string
  const artistString = (array) => {
    const names = array.map((artist) => {
      return artist.name;
    });

    return names.join(", ");
  };

  let explicitIcon;

  if (explicit) {
    explicitIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        className="bi bi-explicit-fill mr-2"
        viewBox="0 0 16 16"
      >
        <path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zm4.326 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826z" />
      </svg>
    );
  }

  // open menu function
  const openMenu = (e) => {
    e.preventDefault();
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  // check if all data has loaded, if loaded - render component
  useEffect(() => {
    if (checked && userData) {
      fetchPlaylists();
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [checked, userData]);

  useEffect(() => {
    checkLiked(track);
  }, [click]);

  return loaded ? (
    <div className="w-full flex-col">
      <div className="w-full flex">
        {image ? <div>image</div> : <div className="hidden"></div>}
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="title">{name}</div>
            <div className="flex text-stone-500">
              {explicitIcon}
              <div className="caption">{artistString(artists)}</div>
            </div>
          </div>
          <div onClick={openMenu} className="text-stone-400 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <TrackMenu open={open} liked={liked} id={track} playlists={userPlaylists}/>
    </div>
  ) : (
    <div></div>
  );
};

export default IndividualSongAndMenu;
