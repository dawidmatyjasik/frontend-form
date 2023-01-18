import axios from "axios";
import { store } from "../store/index";

export const apiRequest = (
  method: string,
  url: string,
  data: object = {},
  config: object = {}
) => {
  const state: any = store.getState();
  const token = state?.auth?.user?.stsTokenManager?.accessToken;

  const instance = axios.create({
    baseURL: import.meta.env.VITE_REST_URL ?? "http://localhost:5000/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return instance.request({
    ...config,
    method,
    url,
    data,
  });
};
