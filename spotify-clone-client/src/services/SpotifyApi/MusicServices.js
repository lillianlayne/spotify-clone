import axios from "axios";
import QueryString from "qs";
import { config } from "dotenv";
import { getAuth } from "./SpotifyApi";
const qs = CountQueuingStrategy;

export const getArtistId = async (input) => {
  const token = await getAuth();
  const url = `https://api.spotify.com/v1/search?q=${input}&type=artist`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.artists.items[0].id;
  } catch (error) {
    console.log(error);
  }
};

export const getArtistInfo = async (id) => {
  const token = await getAuth();
  const url = `https://api.spotify.com/v1/artists/${id}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAlbumsByArtist = async (input) => {
  const token = await getAuth();
  const artistId = await getArtistId(input);
  const url = `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.items;
  } catch (error) {
    console.log(error);
  }
};

export const getAlbumTracklist = async (id) => {
  const token = await getAuth();
  const url = `https://api.spotify.com/v1/albums/${id}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const image = response.data.images[0];
    const name = response.data.name;
    const artist = response.data.artists;
    const tracks = response.data.tracks.items;

    const artistDisplay = artist.map((name) => {
      return name.name
    })


    return {
      image,
      name,
      artist,
      tracks, 
      artistDisplay, 
      release: response.data.release_date
    };

  } catch (error) {
    console.log(error);
  }
};

export const getSingleTrack = async (id) => {
  const token = await getAuth();
  const url = `https://api.spotify.com/v1/tracks/${id}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      id: response.data.id,
      image: response.data.album.images,
      album: response.data.album,
      artists: response.data.artists,
      name: response.data.name,
      duration: response.data.duration_ms,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getSpotifyPlaylistInfo = async (id) => {
  const token = await getAuth();
  const url = `https://api.spotify.com/v1/playlists/${id}/tracks`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPlaylistCoverImage = async (id) => {
  const token = await getAuth();
  const url = `https://api.spotify.com/v1/playlists/${id}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTrackLoop = async (user) => {
  let data = []
  const fetchData = async (id) => {
    const fetchedData = await getSingleTrack(id);
    return fetchedData
  }

  for (let song of user) {
    const fetchedData = await fetchData(song.content) 
    if (fetchedData) {
      data.push(fetchedData)

    } 
  }

  return data

}