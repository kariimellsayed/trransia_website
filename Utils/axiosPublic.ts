import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Create instance
const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 10000,
  // withCredentials: true,
});

// ✅ Request Interceptor: Inject accessToken into every request
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken-transia");

    if (accessToken) {
      config.headers.Authorization = ` Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response Interceptor: Handle 401 & refresh accessToken
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Prevent infinite loops
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken-transia");
        if (!refreshToken) {
          // Redirect to login if no refresh token found
          window.location.href = "/login";
          return Promise.reject(error);
        }

        // Call refresh endpoint
        const refreshResponse = await axios.post(
          `${baseURL}/auth/refresh-token`,
          { refreshToken },
          { withCredentials: true }
        );

        const newAccessToken = refreshResponse.data.accessToken;

        // Save new token & retry original request
        localStorage.setItem("accessToken-transia", newAccessToken);
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Token refresh failed: clear storage & redirect
        localStorage.removeItem("accessToken-transia");
        localStorage.removeItem("refreshToken-transia");
        localStorage.removeItem("role");

        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
