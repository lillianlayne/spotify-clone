import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAlbumsByArtist, getArtistId, getAuth } from "../services/SpotifyApi/SpotifyApi";

const Search = () => {
  let navigate = useNavigate()
  const [input, setInput] = useState("");
  const [albums, setAlbums] = useState([])

  const search = async () => {
   const fetchedAlbums = await getAlbumsByArtist(input);
   setAlbums(fetchedAlbums)
  }

  const getAlbumInfo = (e) => {
    navigate(`/albums/${e}`)
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
            <button key={album.id} value={album.id} onClick={e => getAlbumInfo(e.target.value)} className="py-4">
             
                {album.name}
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default Search;
