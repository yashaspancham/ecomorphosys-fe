import axios from "axios";

const API_URL = "http://localhost:5000/tasks"; // Adjust backend URL

export const fetchTasks = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const fetchTask = async (id: string) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const createTask = async (task: any) => {
  await axios.post(API_URL, task);
};
