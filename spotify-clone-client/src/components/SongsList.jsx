import React from 'react'

const SongsList = ({user}) => {

  const getTime = (ms) => {
    const seconds = ms / 1000;
    const minutes = Math.floor(seconds / 60);
    const remainder = Math.floor(seconds % 60);

    return `${minutes}:${remainder}`
  }
  return (
    <div>
      <h1>songs</h1>
    </div>
  )
}

export default SongsList
