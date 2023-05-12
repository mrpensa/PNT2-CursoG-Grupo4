import axiosClient from "./axiosClient.js";
const apiClient = axiosClient.getApiClient();

export default {
  getAll() {
    return apiClient.get("/cars");
  },
  setCar(car) {
    return apiClient.post("/cars", car);
  },
  delete(id) {
    return apiClient.delete("/cars/" + id);
  },
  update(car) {
    // chequear
    return apiClient.put("/cars", car);
  },
};
