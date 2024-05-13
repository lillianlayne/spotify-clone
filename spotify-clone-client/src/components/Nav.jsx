import { Link } from 'react-router-dom'
// import SignIn from '../pages/SignIn';
import Icons from './Icons'
import { useUser } from '../context/userContext';

const Nav = () => {
  const {userData} = useUser();
 

  return (
       <nav className='flex flex-row justify-between py-6 bg-stone-700 w-full fixed bottom-0'>
      <Link to="/">
        <Icons type="home" fill="none" stroke="white" />
      </Link>
      <Link to="/search">
        <Icons type="search" fill="none" stroke="white" />
      </Link>
      <Link to="/">
        <Icons type="music" fill="none" stroke="white" />
      </Link>
      <Link to="/">
        <Icons type="account" fill="none" stroke="white" />
      </Link>
      </nav>
  )
}

export default Nav
