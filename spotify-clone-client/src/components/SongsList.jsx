import React from 'react'

const SongsList = ({track}) => {

  const getTime = (ms) => {
    const seconds = ms / 1000;
    const minutes = Math.floor(seconds / 60);
    const remainder = Math.floor(seconds % 60);

    return `${minutes}:${remainder}`
  }
  return (
    <div className='flex w-full justify-between'>
      <div className="flex">
        <p>
          1
        </p>
        <div className="flex">
          <div className="w-8 object-cover">
            <img src={track.album.images[0].url} alt="" />
          </div>
          <div className="flex flex-col">
            <p>
              {track.name}
              </p>

              <p className="text-sm">
                {track.artists[0].name}
              </p>
          </div>
        </div>
      </div>
      <p>
        {getTime(track.duration_ms)}
      </p>
    </div>
  )
}

export default SongsList
