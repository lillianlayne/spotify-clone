import {useState, useEffect} from 'react'
import Favorite from '../Favorite'
import { Link } from 'react-router-dom'

const TrackCard = ({name, image, artists, id}) => {
  const [artistDisplay, setArtists] = useState(null)

  useEffect(() => {
    const artistString = artists.map((artist) => {
      return artist.name
    })
    let string;
    setArtists(artistString.join(', '))
  }, [])



  return (
    <div className='flex justify-between items-center gap-4 w-full'>
      <Link to={`/playing/${id}`} className='flex justify-between items-center gap-4 w-full py-2'>

      <img src={image} alt={name} className='size-10' />
      <div className="flex flex-col justify-start w-full">
        <div className="subtitle">
          {name}
        </div>
      <div className="caption">
        { artistDisplay ? artistDisplay : null}
      </div>
      </div>
      </Link>
      <button>
        <Favorite type="songs" itemId={id} />
      </button>
    </div>
  )
}

export default TrackCard
