import axios from "axios";

const useServices = () => {
  const BASE_URL = import.meta.env.VITE_LOCAL_BACK_URL;

  const routeUrl = {
    auth: BASE_URL + "/api/v1/auth",
  };

  // For public  routes
  function api() {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // AUTH API CALLS
  const auth = {
    signup: (data) => api().post(`${routeUrl.auth}/register`, data),
    login: (data) => api().post(`${routeUrl.auth}/login`, data),
  };

  return {
    auth,
  };
};

export default useServices;
