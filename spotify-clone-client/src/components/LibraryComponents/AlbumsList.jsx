import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../context/userContext'
import { getAlbumTracklist } from '../../services/SpotifyApi/MusicServices'

const AlbumsList = () => {
  const {userData} = useUser()
  const [albumIds, setAlbumIds] = useState()
  const [albumData, setAlbumData] = useState([])
  const prevLikedAlbumsRef = useRef([])


  const fetchAlbumData = async (data) => {
   data.forEach((album) => {
    getAlbumData(album.content)
   })
   
  }

  const getAlbumData = async (albumId) => {
    const fetchedData = await getAlbumTracklist(albumId);
    setAlbumData((prev) => [...prev, fetchedData]); 
  }
  

  
  useEffect(() => {
   
    if (userData) {
      const likedAlbums = userData.likedAlbums;
      const prevLikedAlbums = prevLikedAlbumsRef.current
      
      if (JSON.stringify(likedAlbums) !== JSON.stringify(prevLikedAlbums)) {
        fetchAlbumData(likedAlbums)
        prevLikedAlbumsRef.current = likedAlbums
      }
    }
  }, []);

  return (
    <div className='grid grid-cols-2 gap-2'>
     {albumData.map((album) => (
      <div key={album.id} className='flex flex-col'>
        <Link to={`/albums/${album.id}`}>

        <img className='mb-2' src={album.images[0].url} alt="" />
        <p className='text-sm leading-none'>
          {album.name}
        </p>
        <p className="text-xs mt-1">
          {album.artists[0].name}
        </p>
        </Link>
      </div>
     ))}
    </div>
  )
}

export default AlbumsList
