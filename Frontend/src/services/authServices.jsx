import { api } from "../utilities/axios";

const authServices = () => {
  // AUTH API CALLS
  const auth = {
    signup: (data) => api().post("/auth/register", data),
    login: (data) => api().post("/auth/login", data),
    me: () => api().get("/auth/me"),
    forgotPassword: (data) => api().post("/auth/forgot-password", data),
    resetPassword: (data) => api().post("/auth/reset-password", data),
    loginStaff: (data) => api().post("/auth/login/staff", data),
  };

  return {
    auth,
  };
};

export default authServices;
