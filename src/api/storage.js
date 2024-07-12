import { getItemAsync, setItemAsync } from "expo-secure-store";

const getToken = async () => {
  try {
    return await getItemAsync("token");
  } catch (error) {
    console.log(error);
  }
};

const setToken = async (token) => {
  try {
    await setItemAsync("token", token);
  } catch (error) {
    console.log(error);
  }
};

export { getToken, setToken };
