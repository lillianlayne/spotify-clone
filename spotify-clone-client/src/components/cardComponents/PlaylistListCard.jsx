import React from 'react'
import { Link } from 'react-router-dom'

const PlaylistListCard = ({name, photo, id}) => {
  
  return (
    <div className='w-full flex'>
      <div className='size-8 bg-stone-600'>
        <div className="flex w-full justify-between">
          <p className="subtitle">
            {name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PlaylistListCard
