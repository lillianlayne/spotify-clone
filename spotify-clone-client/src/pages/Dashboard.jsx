import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import useAccessToken from '../hooks/useAccessToken'
import Search from '../components/Search'
import PlaylistSideBar from '../components/PlaylistSideBar'
import AlbumView from './AlbumView'
// import { useSpotify } from '../context/spotifyContext'
import useAccessToken from '../hooks/useAccessToken'

const Dashboard = ({user}) => {
const {setSpotifyToken} = useSpotify();
// const accessToken = useAccessToken();



console.log(localStorage)

  return (
    <div>
      <Search />
      
    </div>
  )
}

export default Dashboard
