import React, {useState, useEffect} from 'react'

const TrackSearch = ({data}) => {


  return (
    <div>
      {
        data.map((track) => (
          <p key={track.id}>
            {track.name}
          </p>
        ))
      }
    </div>
  )
}

export default TrackSearch
