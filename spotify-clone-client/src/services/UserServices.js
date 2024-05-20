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
  console.log(data)
  try {
    const res = await Client.post(`user/${userId}/playlist`, data);
    return res.data
  } catch (error) {
    throw error    
  }
}

export const getUserPlaylists = async (id) => {
  try {
    const res = await Client.get(`user/playlist/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}