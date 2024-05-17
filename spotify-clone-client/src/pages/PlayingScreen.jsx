import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleTrack } from '../services/SpotifyApi/MusicServices'

const PlayingScreen = () => {
  const {id} = useParams();
  const [info, setInfo] = useState(null)
  const [artists, setArtists] = useState([])

  const fetchTrack = async (trackId) => {
    const fetchedData = await getSingleTrack(trackId);
    artistString(fetchedData.artists)
    setInfo(fetchedData)
  }

  const artistString = (array) => {
    const result = array.map((item) => {
      return item.name
    })

    setArtists(result)
  }

  const artistDisplay = (array) => {
    return array.join(', ')
  }

  useEffect(() => {
    fetchTrack(id)
  }, [])


  return info ? (
    <div className="w-full h-full absolute transform-center bg-stone-900 z-20">

    <div className='container flex gap-8 flex-col pb-24'>
      <div className="flex w-full relative justify-between">
        <div>...</div>
        <div className="absolute subtitle text-stone-600 transform-center">
          Now Playing
        </div>
        <div>...</div>
      </div>
        <div className="size-72 mx-auto object-cover overflow-hidden border-8 border-stone-950 rounded-2xl raised">
          <img src={info.album.images[0].url} className='w-full object-cover' alt="" />
        </div>
        <div className="div">
          <p className="text text-center text-lg">
            {info.name}
          </p>
          <p className="subtitle text-center text-stone-600">
            {artistDisplay(artists)}
          </p>
        </div>

        <div className="size-80 mt-8 rounded-full items-center justify-center bg-stone-950 flex flex-col raised mx-auto">
          <div className="flex flex-row w-full h-full justify-center items-center">
            play
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="div">
              back
            </div>
            <div className="h-28 w-28 rounded-full raised-inset bg-stone-800">
              
                </div>
            <div className="div">
              fwd
            </div>
          </div>
          <div className="flex flex-row w-full h-full justify-center items-center">
            shuffle
          </div>
          
        </div>
    </div>
    </div>
  ) : (
    <div>loading</div>
  )
}

export default PlayingScreen
