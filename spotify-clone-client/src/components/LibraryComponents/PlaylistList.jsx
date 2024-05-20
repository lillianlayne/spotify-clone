import React, {useState, useEffect, useRef} from 'react'
import CreatePlaylist from '../userPlaylist.components/CreatePlaylist';
import { useUser } from '../../context/userContext';
import { getUserPlaylists } from '../../services/UserServices';
import { useClick } from '../../context/clickContext';
import PlaylistListCard from '../cardComponents/PlaylistListCard';


const PlaylistList = ({create}) => {
  const {click} = useClick();
  const {userData} = useUser()
  const [playlist, setPlaylists] = useState([])
  const prevRef = useRef([])

  const loopData = (data) => {
    data.forEach((id) => {
      fetchUserPlaylists(id)
    })
  }

  const fetchUserPlaylists = async (id) => {
    const fetchedData = await getUserPlaylists(id);
    setPlaylists(prev => [...prev, fetchedData])
  }

  let createForm;

  useEffect(() => {
    if (userData) {
      const data = userData.playlists;
      const prev = prevRef.current;

      if (JSON.stringify(data) !== JSON.stringify(prev)) {
        loopData(data);
        prevRef.current = data
      }
    }
  }, [userData])

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
      <div className="flex flex-col gap-4">
      {playlist.map((list, idx) => (
        <PlaylistListCard key={list._id} name={list.name}/>

      ))}
      </div>
    </div>
  )
}

export default PlaylistList
