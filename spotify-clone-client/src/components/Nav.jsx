import { NavLink } from "react-router-dom";
// import SignIn from '../pages/SignIn';
import Icons from "./Icons";
import { useUser } from "../context/userContext";

const Nav = (props) => {
  const { userData } = useUser();

  return (
    <nav className="flex flex-row py-6 w-full fixed bottom-0 z-20 backdrop-blur-md bg-blackish justify-around">
      <NavLink to="/">
        <Icons type="home" fill="none" stroke="white" />
      </NavLink>
      <NavLink to="/search">
        <Icons type="search" fill="none" stroke="white" />
      </NavLink>
      <NavLink to="/playlists">
        <Icons type="music" fill="none" stroke="white" />
      </NavLink>
      <NavLink to="/">
        <div onClick={props.handleLogOut}>
          <Icons type="account" fill="none" stroke="white" />
        </div>
      </NavLink>
    </nav>
  );
};

export default Nav;
