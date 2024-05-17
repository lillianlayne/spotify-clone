import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getSpotifyPlaylistInfo } from '../services/SpotifyApi/MusicServices'

const PlaylistScreen = () => {
  const [loaded, setLoaded] = useState(false);
  const [playlist, setPlaylist] = useState([])
  
  return (
    <div>
      
    </div>
  )
}

export default PlaylistScreen
