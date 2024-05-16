import ArtistCard from "../cardComponents/ArtistCard"

const ArtistSearch = ({data}) => {


  const handleClick = (e) => {
    console.log(e.target.value)
  }

  return (
   <div className="container">
    
      <ArtistCard id={data.id} action={(e) => handleClick(e)} name={data.name} image={data.images} type={data.type}/>
    
   </div>
  )
}

export default ArtistSearch
