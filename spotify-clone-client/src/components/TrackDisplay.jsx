import React from 'react'

const TrackDisplay = ({addTrack, track}) => {

  return (
    <form className='flex w-full items-center border-b border-stone-600 justify-between' onClick={addTrack}>
      <p>
        {track.name}
      </p>
      <button value={track.id} className='w-fit' type="button">+</button>
    </form>
  )
}

export default TrackDisplay
