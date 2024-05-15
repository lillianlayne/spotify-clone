import React from 'react'

const PlaylistCard = ({title, image, owner}) => {
  return (
    <div className='flex flex-col w-40 flex-shrink-0 '>
      <div className='w-full object-cover'>
        <img src={image} alt="" />
      </div>
      <h5 className='text-sm mt-2'>
        {title}
      </h5>
      <p className="text-xs">
        {owner}
      </p>
    </div>
  )
}

export default PlaylistCard

