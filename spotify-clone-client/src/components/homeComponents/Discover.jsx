import React, { useEffect, useState } from "react";
import { getCategoryPlaylists } from "../../services/SpotifyApi/CategoryServices";
import { Link } from "react-router-dom";

const Discover = () => {
  const [category, setCategory] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    const data = await getCategoryPlaylists("0JQ5DAqbMKFKLfwjuJMoNC");
    setCategory(data);
  };

  useEffect(() => {
    if (category) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [category]);

  useEffect(() => {
    fetchData();
  }, []);
  return loaded ? (
    <div className="container-overflow flex gap-1 flex-col items-start w-full">
      <h1 className="title container">{category.message}</h1>

      <div className="w-full flex gap-2 flex-row justify-start no-scrollbar overflow-scroll">
        {category.playlists.items.map((list) => (
          <div key={list.id} className="first-card w-1/4 gap-2 flex-shrink-0">
            <Link to={`/playlist/${list.id}`}>
              <div className="flex flex-col gap-2">
                <img src={list.images[0].url} alt={list.name} className="" />
                <div className="subtitle">{list.name}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Discover;
