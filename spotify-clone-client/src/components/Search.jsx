import { useEffect, useState } from "react";
import useAccessToken from "../hooks/useAccessToken";

const Search = () => {
  const [input, setInput] = useState("");
  const [albums, setAlbums] = useState([])
  const accessToken = useAccessToken();

  const search = async () => {
    console.log("searching for " + input);
    // GET request using search to get Artist ID
    var artistParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    var artistId = await fetch(
      `https://api.spotify.com/v1/search?q=${input}&type=artist`,
      artistParams
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    console.log(artistId);
    // GET request with Artist ID grab all albums from that artist
    var returnedAlbums = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`,
      artistParams
    )
      .then((response) => response.json())
      .then((data) => setAlbums(data.items));
    // display artists
  };

  return (
    <div>
      <div>
        <input type="text" onChange={(event) => setInput(event.target.value)} name="search" id="search-bar" placeholder="search" />
        <button
          onClick={() => {
            search();
          }}
        >
          search
        </button>
      </div>
      <div className="container grid-cols-4">
        {
          albums.map((album) => (
            <div className="col-auto">
              <h1>
                {album.name}
              </h1>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Search;
