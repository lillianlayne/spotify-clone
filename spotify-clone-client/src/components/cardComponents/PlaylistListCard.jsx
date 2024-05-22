import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../Icons'

const PlaylistListCard = ({name, data}) => {
  
  return (
    <Link to={`/playlist/user/${data._id}`} className='w-full gap-4 items-center flex'>
      <div className="size-10 flex-shrink-0 bg-stone-500 flex justify-center items-center">
        <Icons type="music" fill="currentColor" size="size-6" />
      </div>
        <div className="flex w-full justify-between">
          <p className="subtitle leading-none">
            {name}
          </p>
          <p className='leading-none text-stone-500'>
            •••
          </p>
      </div>
    </Link>
  )
}

export default PlaylistListCard
