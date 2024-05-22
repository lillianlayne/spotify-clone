import axios from "axios";
import QueryString from "qs";
import { config } from "dotenv";
import { getAuth } from "./SpotifyApi";
const qs = CountQueuingStrategy;

export const getArtistInfo = async (artistId) => {
  // Get Artist
  const token = await getAuth();
  const url = `https://api.spotify.com/v1/artists/${artistId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data
  } catch (error) {
    console.log(error);
  }
};

export const getArtistAlbums = async (artistId) => {
  // Get Albums By Artists
  const token = await getAuth();
  const url = `https://api.spotify.com/v1/artists/${artistId}/albums`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data
  } catch (error) {
    console.log(error);
  }
};

export const getArtistTopTracks = async (artistId) => {
  // Get Albums By Artists
  const token = await getAuth();
  const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data
  } catch (error) {
    console.log(error);
  }
};

export const getArtistsRelatatedArtists = async (artistId) => {
  // Get Albums By Artists
  const token = await getAuth();
  const url = `https://api.spotify.com/v1/artists/${artistId}/related-artists`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data
  } catch (error) {
    console.log(error);
  }
};

export const getAllArtistInfo = async (artistId) => {
  const info = await getArtistInfo(artistId);
  const albums = await getArtistAlbums(artistId);
  const topTracks = await getArtistTopTracks(artistId);
  const relatedArtist = await getArtistsRelatatedArtists(artistId);

  return {
    info,
    albums,
    topTracks,
    relatedArtist,
  };
};
