import { NavLink } from "react-router-dom";
// import SignIn from '../pages/SignIn';
import Icons from "./Icons";
import { useUser } from "../context/userContext";

const Nav = ({handleLogOut}) => {
  const { userData } = useUser();

  return (
    <nav className="flex flex-row py-8 w-full fixed bottom-0 top-shadow z-20 backdrop-blur-lg rounded-t-3xl border-t border-stone-700 text-stone-500 justify-around">
      <NavLink to="/">
        <Icons type="home" fill="none" stroke="currentColor" />
      </NavLink>
      <NavLink to="/search">
        <Icons type="search" fill="none" stroke="currentColor" />
      </NavLink>
      <NavLink to="/library">
        <Icons type="music" fill="none" stroke="currentColor" />
      </NavLink>
        <button onClick={(e) => {handleLogOut(e)}}>
          <Icons type="account" fill="none" stroke="currentColor" />
        </button>
    </nav>
  );
};

export default Nav;
