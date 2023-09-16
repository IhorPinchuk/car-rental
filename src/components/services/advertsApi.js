import { instance } from './baseUrl';

export const getAdverts = async () => {
  try {
    const { data } = await instance();
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const getAdvertsList = async (page) => {
  try {
    const { data } = await instance(`?page=${page}&limit=8`);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
