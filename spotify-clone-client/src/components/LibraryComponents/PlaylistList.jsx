import React from 'react'
import CreatePlaylist from '../userPlaylist.components/CreatePlaylist';

const PlaylistList = ({create}) => {


  let createForm;

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
    </div>
  )
}

export default PlaylistList
