import { api } from "./baseUrl";

export const getBookData = async (endPoints) => {
  try {
    const data = await api.get(endPoints);
    return data;
  } catch (e) {
    throw new Error(e.message)
  }
};
