import React, {useState, useEffect} from 'react'
import CreatePlaylist from '../userPlaylist.components/CreatePlaylist';
import { useUser } from '../../context/userContext';
import { getUserPlaylists } from '../../services/UserServices';

const PlaylistList = ({create}) => {
  const {userData} = useUser()
  const [playlist, setPlaylists] = useState([])

  const loopData = (data) => {
    data.playlists.forEach((id) => {
      fetchUserPlaylists(id)
    })
  }

  const fetchUserPlaylists = async (id) => {
    const fetchedData = await getUserPlaylists(id);
    setPlaylists(prev => [...prev, fetchedData])
  }

  let createForm;

  useEffect(() => {
    loopData(userData)
  }, [])
  if (create) {
    createForm = <div>
      <CreatePlaylist />
    </div>  
  } else {
    createForm = <div className='hidden'>createform</div>  
  }

  return (
    <div>
      {createForm}
    </div>
  )
}

export default PlaylistList
