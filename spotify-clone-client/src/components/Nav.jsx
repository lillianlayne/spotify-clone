import { NavLink } from "react-router-dom";
// import SignIn from '../pages/SignIn';
import Icons from "./Icons";
import { useUser } from "../context/userContext";
import { useEffect, useState } from "react";
import { useClick } from "../context/clickContext";

const Nav = ({ handleLogOut }) => {
  const { userData } = useUser();
  const {click, setClick} = useClick();

  const handleClick = () => {
    setClick(prev => prev + 1)
  }



  return (
    <nav className="flex flex-row py-8 w-full fixed bottom-0 top-shadow z-20 backdrop-blur-lg rounded-t-3xl border-t border-stone-700 text-stone-500 justify-around">
      <NavLink to="/">
        <button onClick={handleClick}>
        <Icons type="home" fill="none" stroke="currentColor" />
        </button>
      </NavLink>
      <NavLink to="/search">
        <Icons type="search" fill="none" stroke="currentColor" />
      </NavLink>
      <NavLink to="/library">
        <button onClick={handleClick}>
          <Icons type="music" fill="none" stroke="currentColor" />
        </button>
      </NavLink>
      <button
        onClick={(e) => {
          handleLogOut(e);
        }}
      >
        <Icons type="account" fill="none" stroke="currentColor" />
      </button>
    </nav>
  );
};

export default Nav;
