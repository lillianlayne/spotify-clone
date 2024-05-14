import Client from './Api'

export const GetUser = async (id) => {
  try {
    const res = await Client.get(`/user/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const addToLikedSongs = async (userId, songId) => {


  try {
    const res = await Client.post(`/user/${userId}/songs`, songId)
    return res.data
  } catch (error) {
    console.log(error)
    throw error
  }


}