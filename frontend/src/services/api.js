import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getUsers = () => axios.get(`${API_URL}/users`);
export const createUser = (userData) =>
  axios.post(`${API_URL}/users`, userData);
export const updateUser = (id, userData) =>
  axios.put(`${API_URL}/users/${id}`, userData);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

export const getTasksByUser = (userId) =>
  axios.get(`${API_URL}/tasks`, { params: { userId } });
export const getTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response;
  } catch (error) {
    console.error("Error fetching tasks", error);
    throw error;
  }
};
export const createTask = (taskData) =>
  axios.post(`${API_URL}/tasks`, taskData);
export const updateTask = (id, taskData) =>
  axios.put(`${API_URL}/tasks/${id}`, taskData);
export const deleteTask = (id) => axios.delete(`${API_URL}/tasks/${id}`);

export const getDashboardData = () => axios.get(`${API_URL}/dashboard`);
