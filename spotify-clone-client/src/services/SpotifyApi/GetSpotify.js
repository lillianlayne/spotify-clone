// import axios from "axios";
// import { getSpotifyToken } from "./SpotifyApi";
// const spotifyToken = getSpotifyToken();
// const params = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${spotifyToken}`,
//   },
// };

// // get albums through searching artist name
// export const getAlbums = async (searchInput) => {
//   let albums;

//   const artistId = await fetch(
//     `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
//     params
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       return data.artists.items[0].id;
//     });

//   console.log(artistId);
//   // GET request with Artist ID grab all albums from that artist
//   const returnedAlbums = await fetch(
//     `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`,
//     params
//   )
//     .then((response) => response.json())
//     .then((data) => albums = data.items);

//   return albums;
// };

// export const getSongs = async (albumId) => {
//   let songs;

//   const returnedSongs = await fetch(
//     `https://api.spotify.com/v1/albums/${albumId}/tracks`, params
//   ).then((response) => response.json()).then((data) => songs = data.items)

//   return songs;
// };
