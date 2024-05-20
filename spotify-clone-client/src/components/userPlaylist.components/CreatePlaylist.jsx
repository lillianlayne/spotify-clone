import { useState, useEffect } from "react"
import { createUserPlaylist } from "../../services/UserServices"
import { useUser } from "../../context/userContext"
import { useNavigate } from "react-router-dom"
import { useClick } from "../../context/clickContext"

const CreatePlaylist = () => {
  const {setClick} = useClick()
  let navigate = useNavigate()
  const {userData} = useUser()
  const [formValues, setFormValues] = useState({ name: "", description: ""})

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    let data = {
      name: formValues.name,
      description: formValues.description,
      owner: userData._id
    }
    
    await createUserPlaylist(userData._id, data)
    setClick((prev) => prev + 1)
    navigate('/library')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Playlist Name" value={formValues.name} onChange={handleChange} />
        <input type="text" name="description" placeholder="Playlist Description" value={formValues.description} onChange={handleChange} />
        <button className="btn-primary bg-orange-600 rounded-full" type="submit" onSubmit={handleSubmit}
           
          > create </button>
      </form>
    </div>
  )
}

export default CreatePlaylist
