import React, {useState, useEffect, useRef} from 'react'
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

 

  return (
    <div>
      <div className="flex flex-col gap-4">
      {playlist.map((list, idx) => (
        <PlaylistListCard key={list._id} name={list.name} data={playlist[idx]}/>

      ))}
      </div>
    </div>
  )
}

export default PlaylistList
