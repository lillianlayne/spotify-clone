import { useEffect, useState } from "react";
import NewReleases from "../components/homeComponents/NewReleases";
import Icons from "../components/Icons";
import PopularPlaylists from "../components/homeComponents/PopularPlaylists";
import Search from "../components/Search";
import { useClick } from "../context/clickContext";
import Discover from "../components/homeComponents/Discover";
import Loader from "../components/Loader";

const HomeScreen = ({ user }) => {
  const { click, setClick } = useClick();
  const [search, setSearch] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    setSearch(false);
  }, [click]);

  return loaded ? (
    <div>
      <div className="container pt-4 flex justify-between items-center bg-stone-900 pb-4">
        <h1 className="header ">Discover</h1>
        <div className="flex items-center justify-center bg-stone-600 rounded-full text-stone-900">
          <Icons type="account" fill="currentColor" stroke="currentColor" />
        </div>
      </div>
      <Search setSearch={setSearch} />
      {search ? (
        <div className="hidden"></div>
      ) : (
        <div className="flex flex-col gap-2">
          <NewReleases />
          <PopularPlaylists />
          <Discover />
        </div>
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default HomeScreen;
