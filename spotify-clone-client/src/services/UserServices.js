import Client from "./Api";

export const GetUser = async (id) => {
  try {
    const res = await Client.get(`/user/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const addToLikedList = async (listType, userId, id) => {
  try {
    const res = await Client.post(`/user/${userId}/${listType}`, id);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const removeFromLikedList = async (listType, userId, id) => {
  try {
    const res = await Client.delete(`/user/${userId}/${listType}`, id);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createUserPlaylist = async (userId, data) => {
  try {
    const res = await Client.post(`user/${userId}/playlist`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUserPlaylists = async (id) => {
  try {
    const res = await Client.get(`user/playlist/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deletePlaylist = async (id) => {
  try {
    const res = await Client.delete(`/user/${userId}/${id}`, id);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserPlaylistsLoop = async (userPlaylists) => {
  let data = [];
  const fetchData = async (id) => {
    const fetchedData = await getUserPlaylists(id);
    return fetchedData;
  };

  for (let playlist of userPlaylists) {
    const fetchedData = await fetchData(playlist);
    data.push(fetchedData);
  }

  return data;
};

export const addToPlaylist = async (id, data) => {
  try {
    const res = await Client.post(`user/playlist/${id}/add`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
