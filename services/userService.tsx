// import axiosInstance from "./axiosInstance";
import axiosInstance from "@/Utils/axiosPublic";

interface UserPayload {
  phoneNumber: string;
  password: string;
  role: "admin" | "user";
}

export const getUsers = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export const addUser = async (userData: UserPayload) => {
  const response = await axiosInstance.post("/users", userData);
  return response.data;
};

export const updateUser = async (id: string, updatedData: UserPayload) => {
  const response = await axiosInstance.put(`/users/${id}`, updatedData);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axiosInstance.delete(`/users/${id}`);
  return response.data;
};
