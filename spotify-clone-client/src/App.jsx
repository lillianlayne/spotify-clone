import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CheckSession } from "./services/Auth";
import axios from "axios";
import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import AlbumView from "./pages/AlbumView";
import useAccessToken from "./hooks/useAccessToken";

const App = () => {
  const [user, setUser] = useState(null);
  const accessToken = useAccessToken();

  const handleLogout = async (e) => {
    setUser(null);
    localStorage.clear();
  };

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      <Nav user={setUser} handleLogout={handleLogout}/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard user={user} />}/>
          <Route path="/dashboard/:id" element={<AlbumView token={accessToken} user={user}/>}/>
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
