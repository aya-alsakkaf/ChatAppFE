import { instance } from ".";

const sendMessage = async (message) => {
  try {
    const { data } = await instance.post("/api/message/add", message);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { sendMessage };
