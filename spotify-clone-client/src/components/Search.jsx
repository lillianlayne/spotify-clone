import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAlbums } from "../services/SpotifyApi/GetSpotify";

const Search = () => {
  const [input, setInput] = useState("");
  const [albums, setAlbums] = useState([])

  const search = async () => {
    const fetchAlbums = await getAlbums(input);
    setAlbums(fetchAlbums)
  }

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
        {
          albums.map((album) => (
            <div key={album.id} className="py-4">
             <Link to={`${album.id}`}>
              <h1>
                {album.name}
              </h1>
             </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Search;
