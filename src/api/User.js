import { instance } from ".";
import { setToken } from "./storage";

const register = async (userInfo) => {
  try {
    const { data } = await instance.post("/api/user/register", userInfo);
    setToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/api/user/login", userInfo);
    setToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { register, login };
