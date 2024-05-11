import React from 'react'
import Search from '../components/Search'
import PlaylistSideBar from '../components/PlaylistSideBar'

const Dashboard = ({user}) => {
  return (
    <div>
      <Search />
      <PlaylistSideBar user={user}/>
    </div>
  )
}

export default Dashboard
