import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const [albums, setAlbums] = useState([])
  // const search = async () => {    
  //   const artistParams = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   };

  //   const artistId = await fetch(
  //     `https://api.spotify.com/v1/search?q=${input}&type=artist`,
  //     artistParams
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return data.artists.items[0].id;
  //     });

  //   console.log(artistId);
  //   // GET request with Artist ID grab all albums from that artist
  //   const returnedAlbums = await fetch(
  //     `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`,
  //     artistParams
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setAlbums(data.items));
  //   // display artists
  // };

  return (
    <div className="p-4">
      {/* <div className="w-full">
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
            <div className="py-4">
             <Link to={`${album.id}`}>
              <h1>
                {album.name}
              </h1>
             </Link>
            </div>
          ))
        }
      </div> */}
    </div>
  );
};

export default Search;
