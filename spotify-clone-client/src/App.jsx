import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CheckSession } from "./services/Auth";
import axios from "axios";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import Nav from "./components/Nav";
import LoginScreen from "./pages/LoginScreen";
import SearchScreen from "./pages/SearchScreen";
import { useUser } from "./context/userContext";

const App = () => {
  const { userData } = useUser();

  console.log(localStorage)
  let nav;
  if (userData) {
    nav = <Nav />;
  }

  return userData ? (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
        </Routes>
      </main>
    </div>
  ) : (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
        </Routes>
        </main>
    </div>
  )

};

export default App;
