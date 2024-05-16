import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAlbumsByArtist, getArtistId, getAuth } from "../services/SpotifyApi/SpotifyApi";
import { getSearchResults } from "../services/SpotifyApi/SearchServices";
import TrackSearch from "./searchComponents/TrackSearch";
import AlbumsSearch from "./searchComponents/AlbumsSearch";
import ArtistSearch from "./searchComponents/ArtistSearch";
import PlaylistSearch from "./searchComponents/PlaylistSearch";

const Search = () => {
  let navigate = useNavigate()
  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false)
  const [searchData, setSearchData] = useState(null)

  const search = async () => {
   const fetchedData = await getSearchResults(input);
   setSearchData(fetchedData)
  }

  const getAlbumInfo = (e) => {
    navigate(`/albums/${e}`)
  }

  useEffect(() => {
    if (searchData) {
      setLoaded(true)
    } else {
      setLoaded(false)
    }
  }, [searchData])

  return (
    <div className="p-4">
      <div className="w-full">
        <input className="w-full p-4 text-stone-900" type="text" onChange={(event) => setInput(event.target.value)} name="search" id="search-bar" placeholder="search" />
        <button
          onClick={() => {
            search();
          }}
        >
          search
        </button>
      </div>
      <div className="flex flex-col">
          { loaded ? < ArtistSearch data={ searchData.artists[0]} /> : <div></div> }
          { loaded ? < PlaylistSearch data={ searchData.playlists} /> : <div></div> }
      </div>
    </div>
  );
};

export default Search;
