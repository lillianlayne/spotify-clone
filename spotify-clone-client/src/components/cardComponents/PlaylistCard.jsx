import {useState, useEffect} from 'react'

const PlaylistCard = ({playlist}) => {
 
  return (
    <div className='flex flex-col w-1/4 gap-2 flex-shrink-0'>

      <img className="w-full object-cover" src={playlist.images[0].url} alt="" />
      <p className="text-sm">
        {playlist.name}
      </p>
    </div>
  )
}

export default PlaylistCard
