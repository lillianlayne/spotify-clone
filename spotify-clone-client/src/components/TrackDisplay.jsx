import React from 'react'

const TrackDisplay = ({addTrack, album}) => {

  return (
    
    <div className="flex flex-col py-4 gap-4 px-6 align-center justify-center mx-auto">
      <h1 className="text-sm text-center font-semibold">
        {album.name}
      </h1>
      <img src={album.images[0].url} alt="" />
      <div className="flex justify-between w-full">
        <div className="flex flex-col w-1/2">
          <p className="text-base leading-tight">
            {album.name}
          </p>
          <p className="text-sm mt-1">
            {album.artists[0].name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrackDisplay
