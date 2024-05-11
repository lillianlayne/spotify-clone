import { useState, useEffect } from "react";
import axios from "axios";
import { USER_PATH } from "../global";

const useUser = (userId) => {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    let response = await axios.get(`${USER_PATH}/${userId}`);

    setUser(response.data)
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return user
};

export default useUser;
