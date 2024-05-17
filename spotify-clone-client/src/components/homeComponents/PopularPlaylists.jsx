import {useState, useEffect} from 'react'
import { getPopularPlaylists } from '../../services/SpotifyApi/CategoryServices'
import { Link } from 'react-router-dom';

const PopularPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);

  const fetchPlaylists = async () => {
    const fetchedData = await getPopularPlaylists();
    setPlaylists(fetchedData)
  }

  useEffect(() => {
    fetchPlaylists()
  }, [])

  return (
    <div className='container-overflow mt-3 flex gap-1 flex-col items-start py-2 w-full'>
      <h1 className="title container">
        Popular Playlists
      </h1>
        
      <div className="w-full flex gap-2 flex-row justify-start no-scrollbar overflow-scroll">
      {
          playlists.map((list) => (
            <div key={list.id} className="first-card w-1/4 gap-2 flex-shrink-0">
              <Link to={`/playlist/${list.id}`}>
              <div className="flex flex-col gap-2">
              <img src={list.images[0].url} alt={list.name} className='' />
              <div className="subtitle">
                {list.name}
              </div>
              </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PopularPlaylists
