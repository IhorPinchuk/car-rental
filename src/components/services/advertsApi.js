import { instance } from './baseUrl';

export const getAdverts = async () => {
  try {
    const { data } = await instance();
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
