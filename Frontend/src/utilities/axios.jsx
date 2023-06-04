import Axios from "axios";

const BASE_URL = import.meta.env.VITE_LOCAL_BACK_URL;

export const api = () => {
  return Axios.create({
    baseURL: BASE_URL + "/api/v1",
    headers: {
      "Content-Type": "application/json",
      ...(localStorage.getItem("accessToken")
        ? { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
        : {}),
    },
  });
};
