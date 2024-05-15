import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import { getPopularPlaylists } from "../services/SpotifyApi/CategoryServices";
import PlaylistCard from "../components/PlaylistCard";
import NewReleases from "../components/NewReleases";

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
    <div className=" h-screen pl-4 pt-4 pb-14">
      <div className="flex gap-2 flex-col items-start w-full overflow-hidden">
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

      <NewReleases />
    </div>
  );
};

export default HomeScreen;
