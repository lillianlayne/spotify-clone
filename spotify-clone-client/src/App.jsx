import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CheckSession } from "./services/Auth";
import "./App.css";
import { useUser } from "./context/userContext";
import HomeScreen from "./pages/HomeScreen";
import Nav from "./components/Nav";
import LoginScreen from "./pages/LoginScreen";
import SearchScreen from "./pages/SearchScreen";
import AlbumScreen from "./pages/AlbumScreen";
import PlaylistScreen from "./pages/PlaylistScreen";
import LibraryScreen from "./pages/LibraryScreen";
import { GetUser } from "./services/UserServices";

const App = () => {
  const { setUserData } = useUser();
  const [user, setUser] = useState(null);

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    getUserData(user.id);
  };

  const getUserData = async (id) => {
    const userData = await GetUser(id);
    setUserData(userData);
  };

  const handleLogOut = () => {
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      {user ? <Nav handleLogout={handleLogOut} /> : null}
      <main>
        <Routes>
          {user ? (
            <Route path="/" element={<HomeScreen />} />
          ) : (
            <Route path="/" element={<LoginScreen setUser={user} />} />
          )}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/playlists" element={<LibraryScreen user={user} />} />
          <Route path="/albums/:id" element={<AlbumScreen user={user} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
