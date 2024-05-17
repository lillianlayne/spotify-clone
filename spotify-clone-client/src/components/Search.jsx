import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getSearchResults } from "../services/SpotifyApi/SearchServices";
import TrackSearch from "./searchComponents/TrackSearch";
import AlbumsSearch from "./searchComponents/AlbumsSearch";
import ArtistSearch from "./searchComponents/ArtistSearch";
import PlaylistSearch from "./searchComponents/PlaylistSearch";
import Icons from "./Icons";

const Search = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [searchData, setSearchData] = useState(null);

  const search = async () => {
    setInput('')
    const fetchedData = await getSearchResults(input);
    setSearchData(fetchedData);
  };

  const getAlbumInfo = (e) => {
    navigate(`/albums/${e}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      search();
    }
  };

  useEffect(() => {
    if (searchData) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [searchData]);

  return (
    <div className="">
      <div className="w-full border-b border-stone-600 rounded-b-3xl container pt-5 pb-8 bg-stone-900">

      <p className="text-2xl pb-4 pl-2">
        Discover
      </p>
      <div className="w-full flex justify-between items-center border border-stone-800  py-3 px-4 bg-stone-900 rounded-full overflow-hidden">
        <input
          type="text"
          name="search"
          placeholder="search"
          className=" w-full bg-stone-900"
          onKeyDown={handleKeyDown}
          onChange={(event) => setInput(event.target.value)}
          />
        <button
          className="text-stone-600"
          onClick={() => {
            search();
          }}
          >
          <Icons type="search" stroke="currentColor" fill="none"></Icons>
        </button>
          </div>
      </div>
      <div className="flex gap-6 mt-6 flex-col">
        {loaded ? <ArtistSearch data={searchData.artists[0]} /> : <div></div>}
        {loaded ? <PlaylistSearch data={searchData.playlists} /> : <div></div>}
      </div>
    </div>
  );
};

export default Search;
