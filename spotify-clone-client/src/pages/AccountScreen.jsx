import React from 'react'
import { useUser } from '../context/userContext'

const AccountScreen = ({handleLogOut}) => {
  const {userData} = useUser();

 

  return (
    <div className='container flex flex-col items-center justify-between gap-4'>
      <div className="size-24 mt-8 rounded-full bg-stone-300">
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className="title">
          {userData.name}
        </div>
        <div className="caption">
          {userData.email}
        </div>
      </div>
      <div className="grid grid-cols-3 mt-4 w-full">
        <div className="flex flex-col w-full justify-between items-center border-r col-span-1">
          <p className="text-3xl">
            {userData.likedSongs.length}
          </p>
          <p className="caption">liked songs</p>
        </div>
        <div className="flex flex-col items-center border-r w-full justify-between col-span-1">
          <p className="text-3xl">
            {userData.likedArtists.length}
          </p>
          <p className="caption">liked artists</p>
        </div>
        <div className="flex flex-col items-center w-full justify-between col-span-1">
          <p className="text-3xl">
            {userData.likedAlbums.length}
          </p>
          <p className="caption">liked albums</p>
        </div>
      </div>
      <div className="btn-primary">
        <button className='btn-primary mt-28 bg-green-500 rounded-full' onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default AccountScreen
