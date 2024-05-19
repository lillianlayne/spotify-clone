import { useState, useEffect } from "react"
import { createUserPlaylist } from "../../services/UserServices"
import { useUser } from "../../context/userContext"
import { useNavigate } from "react-router-dom"

const CreatePlaylist = () => {
  let navigate = useNavigate()
  const {userData} = useUser()
  const [formValues, setFormValues] = useState({ title: "", description: ""})

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    await createUserPlaylist(userData._id, {
      title: formValues.title,
      description: formValues.description,
      owner: userData._id
    })

    navigate('/')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Playlist Name" value={formValues.title} onChange={handleChange} />
        <input type="text" name="description" placeholder="Playlist Description" value={formValues.description} onChange={handleChange} />
        <button className="btn-primary bg-orange-600 rounded-full" type="submit" onSubmit={handleSubmit}
           
          > create </button>
      </form>
    </div>
  )
}

export default CreatePlaylist
