import { useState, useEffect } from "react"
import ArtistCard from "../cardComponents/ArtistCard"
import { addToLikedList } from "../../services/UserServices"
import { useUser } from "../../context/userContext"

const ArtistSearch = ({data}) => {
  const {userData} = useUser();

  const handleClick = (e) => {
    addToLikedList('artists', userData._id, e.target.value)
  }

 
  return (
   <div className="container">
    
      <ArtistCard id={data.id} action={(e) => handleClick(e)} name={data.name} image={data.images} type={data.type}/>
    
   </div>
  )
}

export default ArtistSearch
