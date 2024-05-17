import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CheckSession } from "./services/Auth";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { useUser } from "./context/userContext";
import HomeScreen from "./pages/HomeScreen";
import Nav from "./components/Nav";
import LoginScreen from "./pages/LoginScreen";
import SearchScreen from "./pages/SearchScreen";
import AlbumScreen from "./pages/AlbumScreen";
import PlaylistScreen from "./pages/PlaylistScreen";
import LibraryScreen from "./pages/LibraryScreen";
import PlaylistDetailScreen from "./pages/PlaylistDetailScreen";
import { GetUser } from "./services/UserServices";
import Register from "./pages/Register";
import ArtistScreen from "./pages/ArtistScreen";

const App = () => {
  let navigate = useNavigate()
  const { setUserData } = useUser();
  const [user, setUser] = useState(null);

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    getUserData(user.id);
    navigate('/')
  };

  const getUserData = async (id) => {
    const userData = await GetUser(id);
    setUserData(userData);
  };

  const handleLogOut = (e) => {
    localStorage.clear();
    setUser(null);
    setUserData(null);
    navigate("/signin")
  };


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    } else {
      navigate('/signin')
    }
  }, []);



  return (
    <div className="App bg-stone-900 h-screen">
      {user ? <Nav handleLogOut={handleLogOut} /> : null}
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/albums/:id" element={<AlbumScreen user={user} />} />
          <Route path="/signin" element={<LoginScreen setUser={setUser} />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/library" element={<LibraryScreen user={user} />} />
          <Route path="/playlist/:id" element={<PlaylistDetailScreen />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/artist/:id" element={<ArtistScreen />}/>
        </Routes>
      </main>
    </div>
  );
};

export default App;
