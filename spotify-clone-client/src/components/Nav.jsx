import { NavLink } from "react-router-dom";
// import SignIn from '../pages/SignIn';
import Icons from "./Icons";
import { useUser } from "../context/userContext";

const Nav = (props) => {
  const { userData } = useUser();

  return (
    <nav className="flex flex-row py-8 w-full fixed bottom-0 z-20 bg-stone-900 rounded-t-3xl border-t border-stone-700 text-stone-500 justify-around">
      <NavLink to="/">
        <Icons type="home" fill="none" stroke="currentColor" />
      </NavLink>
      <NavLink to="/search">
        <Icons type="search" fill="none" stroke="currentColor" />
      </NavLink>
      <NavLink to="/playlists">
        <Icons type="music" fill="none" stroke="currentColor" />
      </NavLink>
      <NavLink to="/">
        <div onClick={props.handleLogOut}>
          <Icons type="account" fill="none" stroke="currentColor" />
        </div>
      </NavLink>
    </nav>
  );
};

export default Nav;
