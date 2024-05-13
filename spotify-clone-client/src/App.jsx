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

const App = () => {
  const {setUserData} = useUser();
  const [user, setUser] = useState(null);

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    setUserData(localStorage)
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


  return user !== null ? (
    <div className="App">
      <Nav handleLogOut={handleLogOut}/>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/albums/:id" element={<AlbumScreen />} />
        </Routes>
      </main>
    </div>
  ) : (
    <div className="App">
      <main>
        <Routes>
      <Route path="/search" element={<SearchScreen />} />
          <Route path="/" element={<LoginScreen setUser={setUser} />} />
        </Routes>
        </main>
    </div>
  )

};

export default App;
