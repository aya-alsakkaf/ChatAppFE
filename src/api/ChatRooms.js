import { instance } from ".";

const getAllChatRooms = async () => {
  try {
    const { data } = await instance.get("/api/chat");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getChatRoombyID = async (id) => {
  try {
    const { data } = await instance.get(`/api/chat/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllChatRooms, getChatRoombyID };
