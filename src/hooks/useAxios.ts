import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_REST_URL ?? "http://localhost:5000/api",
  withCredentials: true,
});

interface IRequest {
  method: string;
  url: string;
  data: object;
  config?: object;
}

export const apiRequest = (
  method: string,
  url: string,
  data: object = {},
  config: object = {}
) =>
  instance.request({
    ...config,
    method,
    url,
    data,
  });
