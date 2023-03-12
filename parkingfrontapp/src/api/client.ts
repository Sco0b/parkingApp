import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/",
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error.response.data);
  }
);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
