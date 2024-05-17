import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import NewReleases from "../components/homeComponents/NewReleases";
import Icons from "../components/Icons";
import PopularPlaylists from "../components/homeComponents/PopularPlaylists";
import Search from "../components/Search";
import { useClick } from "../context/clickContext";

const HomeScreen = ({ user }) => {
  const { userData } = useUser();
  const {click, setClick} = useClick()
  const [search, setSearch] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    setSearch(false)
  }, [click])

  return (
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
        <div>
          <NewReleases />
          <PopularPlaylists />
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
