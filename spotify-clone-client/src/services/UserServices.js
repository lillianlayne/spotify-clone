import Client from './Api'

export const GetUser = async () => {
  try {
    const res = await Client.get('/users')
    return res.data
  } catch (error) {
    throw error
  }
}
