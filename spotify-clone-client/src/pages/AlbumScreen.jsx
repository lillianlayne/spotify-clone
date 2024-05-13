import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { getAlbumTracklist } from "../services/SpotifyApi/SpotifyApi";


const AlbumScreen = () => {
  const {id} = useParams();
  const [albumInfo, setAlbumInfo] = useState([])

  const getInfo = async () => {

    const fetchedData = await getAlbumTracklist(id);
    setAlbumInfo(fetchedData)
  }

  useEffect(() => {
    getInfo()
  })
  
  return (
    <div>
      {
        albumInfo.map((info) => (
          <div className="flex" key={info.id}>
            <p>
              {info.name}
            </p>
          </div>
        ))
      }
    </div>
  )
}

export default AlbumScreen
