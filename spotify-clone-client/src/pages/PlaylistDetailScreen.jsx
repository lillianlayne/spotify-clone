import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getSpotifyPlaylistInfo, getPlaylistCoverImage } from '../services/SpotifyApi/MusicServices';
import TrackCard from '../components/cardComponents/TrackCard';

const PlaylistDetailScreen = () => {
  const {id} = useParams();
  const [loaded, setLoaded] = useState(false)
  const [info, setInfo] = useState(null)
  const [tracks, setTracks] = useState(null)

  const fetchInfo = async () => {
    const fetchedInfo = await getPlaylistCoverImage(id)
    const fetchedTracks = await getSpotifyPlaylistInfo(id);
    setInfo(fetchedInfo)
    setTracks(fetchedTracks.items)
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  useEffect(() => {
    if (tracks && info) {
      setLoaded(true)
    } else {
      setLoaded(false)
    }
  }, [tracks, info])

  return loaded ? (
    <div className='container h-screen flex flex-col gap-4 pb-24'>
     <img src={info.images[0].url} alt="playlist_image" className='w-3/4 mx-auto mt-4 border-8 rounded-2xl border-stone-900 raised'/>
     <div className="flex flex-col gap-1 my-4 justify-start items-start">
        <div className="title font-bold">
          {info.name}
        </div>
        <div className="subtitle text-stone-500">
          {info.description}
        </div>
      </div>
      <div className="flex flex-col">
        {tracks.map((track) => (
          <TrackCard key={track.track.id} name={track.track.name} image={track.track.album.images[0].url} artists={track.track.artists}/>
        ))}
      </div>
    </div>
  ) : <h1>loading</h1>
}

export default PlaylistDetailScreen
