import {useState, useEffect} from 'react'
import Icons from '../Icons'

const TrackCard = ({name, image, artists}) => {
  const [artistDisplay, setArtists] = useState(null)

  useEffect(() => {
    const artistString = artists.map((artist) => {
      return artist.name
    })
    let string;
    setArtists(artistString.join(', '))
  }, [])



  return (
    <div className='flex justify-between items-center gap-4 w-full py-2'>
      <img src={image} alt={name} className='size-10' />
      <div className="flex flex-col justify-start w-full">
        <div className="subtitle">
          {name}
        </div>
      <div className="caption">
        { artistDisplay ? artistDisplay : null}
      </div>
      </div>
      <button>
        <Icons type="add" stroke="currentColor"/>
      </button>
    </div>
  )
}

export default TrackCard
