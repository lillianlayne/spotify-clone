import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserPlaylists } from '../services/UserServices'
import Icons from '../components/Icons'
import { getTrackLoop } from '../services/SpotifyApi/MusicServices'
import IndividualSongAndMenu from '../components/TrackComponents/IndividualSongAndMenu'
import Loader from '../components/Loader'


const UserPlaylistDetailScreen = () => {
  let navigate = useNavigate()
  const {id} = useParams()
  const [songs, setSongs] = useState(null)
  const [data, setData] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const fetchData = async (paramId) => {
    const fetched = await getUserPlaylists(paramId);
    setSongs(fetched)
  }

  const fetchSongs = async (array) => {
    const fetched = await getTrackLoop(array)
    setData(fetched)
  }

  useEffect(() => {
    fetchData(id)
  }, [])

  useEffect(() => {
    if (songs) {
      fetchSongs(songs.songs)
    }
  }, [songs])

  useEffect(() => {
    if (songs && data) {
      setLoaded(true)
    }
  }, [data])
  return loaded ? (
    <div className='container flex flex-col items-center pt-4 gap-8'>
       <div className="flex mt-4 w-full justify-between">
          <div onClick={() => navigate(-1)}>
            <Icons
              type="back"
              fill="currentColor"
              stroke="none"
              size="size-8"
            />
          </div>
          <div>•••</div>
        </div>
      <div className="size-80 aspect-1 flex-shrink-0 bg-stone-500 flex justify-center items-center">
        <Icons type="music" fill="currentColor" size="size-24" />
      </div>   
      <div className="w-full">
        <div className="main-title">
          {songs.name}
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        {
          data.map((song) => (
            <IndividualSongAndMenu 
            key={song.name}
            track={song.id}
            name={song.name}
            artists={song.artists}
            image={song.image[0].url}
            />
          ))
        }
      </div>
    </div>
  ) : <Loader />
}

export default UserPlaylistDetailScreen
