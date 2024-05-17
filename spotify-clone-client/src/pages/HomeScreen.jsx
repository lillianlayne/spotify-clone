import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import NewReleases from "../components/homeComponents/NewReleases";
import Icons from "../components/Icons";
import PopularPlaylists from "../components/homeComponents/PopularPlaylists";

const HomeScreen = ({ user }) => {
  const { userData } = useUser();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className=" h-screen">
      <div className="container pt-4 flex justify-between items-center bg-stone-900 pb-4">
        <h1 className="header ">Discover</h1>
        <div className="flex items-center justify-center bg-stone-600 rounded-full text-stone-900">
          <Icons type="account" fill="currentColor" stroke="currentColor" />
        </div>
      </div>
      <NewReleases />
      <PopularPlaylists />
    </div>
  );
};

export default HomeScreen;
