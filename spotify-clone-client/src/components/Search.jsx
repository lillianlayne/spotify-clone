import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getSearchResults } from "../services/SpotifyApi/SearchServices";
import TrackSearch from "./searchComponents/TrackSearch";
import AlbumsSearch from "./searchComponents/AlbumsSearch";
import ArtistSearch from "./searchComponents/ArtistSearch";
import PlaylistSearch from "./searchComponents/PlaylistSearch";
import Icons from "./Icons";
import { useClick } from "../context/clickContext";

const Search = ({setSearch}) => {
  let navigate = useNavigate();
  const {click} = useClick()
  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [searchData, setSearchData] = useState(null);


  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const search = async () => {
    setInput("");
    const fetchedData = await getSearchResults(input);
    setSearchData(fetchedData);
    setSearch(true)
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


  useEffect(() => {
    setLoaded(false)
    setSearchData(null)
    setInput('')
  }, [click])

  return (
    <div className="w-full border-b border-stone-600 rounded-b-3xl container pt-5 pb-4 mb-4 bg-stone-900">
      <div className="w-full flex justify-between items-center border border-stone-700 py-3 px-4 bg-stone-800 rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="search"
          onKeyDown={handleKeyDown}
          onChange={(e) => handleChange(e)}
        />
        <button className="text-stone-600" onClick={search}>
          <Icons type="search" fill="none" stroke="currentColor"/>
        </button>
      </div>
      <div className="flex gap-6 mt-6 flex-col">
        {loaded ? <ArtistSearch data={searchData.artists[0]} /> : <div className="h-[0px] hidden"></div>}
        {loaded ? <PlaylistSearch data={searchData.playlists} /> : <div className="h-[0px] hidden"></div>}
      </div>
    </div>
  );
};

export default Search;
