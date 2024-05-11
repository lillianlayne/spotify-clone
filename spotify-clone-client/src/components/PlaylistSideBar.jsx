import React from 'react'
import useUser from '../hooks/useUser'

const PlaylistSideBar = ({user}) => {
  const userData = useUser(user.id);
  console.log(userData)
  return (
    <div>
      
    </div>
  )
}

export default PlaylistSideBar
