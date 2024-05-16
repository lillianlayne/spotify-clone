import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import { getPopularPlaylists } from "../services/SpotifyApi/CategoryServices";
import PlaylistCard from "../components/PlaylistCard";
import NewReleases from "../components/NewReleases";
import Search from "../components/Search";

const HomeScreen = ({ user }) => {
  const { userData } = useUser();
  const [popularPlaylists, setPopularPlaylists] = useState([]);
  const getPlaylists = async () => {
    const playlistData = await getPopularPlaylists();
    setPopularPlaylists(playlistData.playlists.items);
  };

  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <div className=" h-screen">
      <div className="container bg-stone-900 pb-4 rounded-b-3xl border-b border-stone-700 mb-3">
      <h1 className="text-3xl mt-3 font-medium">Discover</h1>
      </div>
          <NewReleases />
      <div className="container-overflow flex gap-2 flex-col items-start">
        <h1 className="text-sm">Spotify Playlists</h1>
        <div className="div w-full flex justify-start overflow-scroll gap-2">
          {popularPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              title={playlist.name}
              image={playlist.images[0].url}
              owner={playlist.owner.display_name}
             />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
