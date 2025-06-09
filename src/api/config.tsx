import axios, { type AxiosPromise } from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiRequest = async ({
  type,
  url,
  apiPayload,
}: {
  type: string;
  url: string;
  apiPayload?: any;
}) => {
  let request: AxiosPromise;
  switch (type) {
    case "get":
      request = axiosInstance.get(url, {});
      break;
    case "put":
      request = axiosInstance.put(url, apiPayload, {});
      break;
    case "delete":
      request = axiosInstance.delete(url, {});
      break;
    case "post-json": {
      request = axiosInstance.post(url, apiPayload, {});
      break;
    }
    case "post":
    default:
      request = axiosInstance.post(url, apiPayload, {});
  }
  return request
    .then((response: any) => response?.data)
    .catch((error: unknown) => {
      throw error;
    });
};
