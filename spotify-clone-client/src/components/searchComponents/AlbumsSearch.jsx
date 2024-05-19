import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const AlbumsSearch = ({data}) => {
  
  return (
    <div className="">
      <div className="container">
      <p className="title leading-none">
        Albums & Appearances
      </p>

      </div>
      <div className="flex overflow-scroll container-overflow gap-2 justify-start">

      {
        data.map((album) => (
          <Link to={`/albums/${album.id}`} key={album.id} className="flex-shrink-0 first-card">
            <div className="flex flex-col w-32 gap-2 flex-shrink-0">
              <div className="aspect-square w-full object-cover">

              <img src={album.images[0].url} alt="" className="w-full" />
              </div>
              <div className="subtitle line-clamp-1">
                {album.name}
              </div>
            </div>
          </Link>
        ))
      }
      
    </div>
    </div>
  )
}

export default AlbumsSearch
