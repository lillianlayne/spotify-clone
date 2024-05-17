import React from 'react'
import { useUser } from '../context/userContext'
import { useEffect, useState } from 'react';
import { addToLikedList } from '../services/UserServices';
import Icons from './Icons';
import Favorite from './Favorite';

const AlbumTracks = ({track}) => {
  const {userData} = useUser();
  const [userId, setUserId] = useState();

  const handleClick = (e) => {
    console.log(e.target.value)
    try {
      addToLikedList('songs', userId, {content: e.target.value})
    } catch (error) {

    }
  }
  

  useEffect(() => {
    setUserId(userData._id)
  }, [])
  return (
    <div className='w-full flex justify-between items-center'>

        <div className="flex flex-col">
        <p className="text-sm font-normal">
          {track.name}
        </p>
       <div className="div gap-2 flex">

          {
            track.artists.map((artist) => (
              <p key={artist.name} className="text-xs">
              {artist.name}
        </p>
            ))
          }
          </div>
        </div>
        <button value={track.id} onClick={(e) => handleClick(e)}>
          <Icons type="add" stroke="white" fill="none"/>
        </button>
    </div>
  )
}

export default AlbumTracks
