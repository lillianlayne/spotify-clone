import Search from "../components/Search"
import Loader from "../components/Loader"
import { getSeveralBrowseCategories } from "../services/SpotifyApi/CategoryServices"
import { useEffect, useState } from "react"

const SearchScreen = () => {
  const [cat, setCat] = useState(null)


  const fetchCats = async () => {
    const data = await getSeveralBrowseCategories();
    console.log(data)
  }
  useEffect(() => {
    fetchCats()
  }, [])
 
  return (
    <div>
      <Search />    
    </div>
  )
}

export default SearchScreen
