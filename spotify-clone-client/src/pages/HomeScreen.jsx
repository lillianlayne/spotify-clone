import { useUser } from '../context/userContext'
import { Nav } from 'react-bootstrap'

const HomeScreen = ({user}) => {
  const {userData} = useUser()
  
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-4 p-4">
       
        <h1>
          {userData.email}
        </h1>
    </div>
  )
}

export default HomeScreen
