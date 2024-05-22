import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getAllArtistInfo } from "../services/SpotifyApi/ArtistInfo";
import { PlayCircleFill, Shuffle } from "react-bootstrap-icons";
import FollowButton from "../components/FollowButton";
import IndividualSongAndMenu from "../components/TrackComponents/IndividualSongAndMenu";

const ArtistScreen = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const fetchArtistInfo = async (artistId) => {
    const fetchedData = await getAllArtistInfo(artistId);
    setData(fetchedData);
  };

  useEffect(() => {
    fetchArtistInfo(id);
  }, []);

  useEffect(() => {
    if (!data) {
      setLoaded(false);
    } else {
      setLoaded(true);
    }
  }, [data]);

  return loaded ? (
    <div className="w-full">
      <div className="fixed h-full w-full z-0">
        <div className="aspect-w-3 aspect-h-4 flex">
          <div className="w-full h-full smooth-gradient z-[3]"></div>
          <img src={data.image} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="relative container flex flex-col gap-4 w-full">
        <div className="aspect-w-3 aspect-h-3"></div>
        <div className="">
          <div className="text-[45px] leading-none mb-4 font-bold">{data.info.name}</div>
          <div className="flex gap-1">
            {data.info.genres.map((genre) => (
              <div
                key={genre}
                className="flex caption rounded-full px-2 border border-stone-600"
              >
                {genre}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <FollowButton action="artists" value={data.info.id} />
          </div>
          <div className="flex gap-4 items-center">
            <PlayCircleFill className="size-14 text-green-600" />
            <Shuffle className="size-6 text-translucent3" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="title">Popular</div>
          <div className="flex flex-col gap-2">
            {data.topTracks.tracks.slice(0, 5).map((song, index) => (
              <div
                key={song.name}
                className="flex w-full items-center justify-between"
              >
                <div className="caption size-5 flex items-center justify-start">
                  {index}
                </div>
                <IndividualSongAndMenu
                  key={song.name}
                  track={song.id}
                  name={song.name}
                  artists={song.artists}
                  explicit={song.explicit}
                  image={song.album.images[0].url}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-4 gap-4">
        <div className="title">Albums</div>

        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default ArtistScreen;
