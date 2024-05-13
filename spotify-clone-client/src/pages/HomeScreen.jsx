import { useEffect } from 'react'
import { useUser } from '../context/userContext'

const HomeScreen = ({user}) => {
  const {userData} = useUser()
 


  
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-4 p-4">
       
        <h1>
          
        </h1>
    </div>
  )
}

export default HomeScreen
