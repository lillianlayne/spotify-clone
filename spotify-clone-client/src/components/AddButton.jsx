import React, {useState, useEffect} from 'react'
import Icons from './Icons'
import { useUser } from '../context/userContext'


const AddButton = ({type, id}) => {
  const {userData ,setUserData} = useUser();
  const [active, setActive] = useState(false);

  const checkUser = async (type) => {
    let info;

    if (type === 'song') {
      info = userData.likedSongs
    }
  }
  
  const openDrawer = (e) => {
    e.preventDefault();


  }

  return (
    <div onClick={openDrawer} className='text-stone-300'>
      <Icons type="menu" fill="currentColor" />
    </div>
  )
}

export default AddButton
