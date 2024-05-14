import { useEffect, useState } from 'react'
import { useUser } from '../context/userContext'
import { getPopularPlaylists } from '../services/SpotifyApi/SpotifyApi'
import PlaylistCard from '../components/PlaylistCard'

const HomeScreen = ({user}) => {
  const {userData} = useUser()
  const [popularPlaylists, setPopularPlaylists] = useState([])
  
  const getPlaylists = async () => {
    const playlistData = await getPopularPlaylists();
    setPopularPlaylists(playlistData.playlists.items)
  }

  useEffect(() => {
   getPlaylists()
  }, []);

  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-4 p-4">
       <div className="div w-full flex justify-start overflow-hidden gap-2">
        {
          popularPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} title={playlist.name} image={playlist.images[0].url} owner={playlist.owner.display_name}/>
          ))
        }
       </div>
    </div>
  )
}

export default HomeScreen
