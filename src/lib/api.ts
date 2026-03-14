import axios from 'axios';
import { getToken } from './auth';
import { AuthResponse, GivePointPayload, LoginPayload, User } from '@/types';

const BASE_URL = 'https://test.edexschool.uz/api';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
  const res = await api.post<AuthResponse>('/auth/login', payload);
  return res.data;
};

export const getStudents = async (): Promise<User[]> => {
  const res = await api.get<User[]>('/users');
  return res.data.filter((u) => u.role === 'STUDENT');
};

export const givePoint = async (payload: GivePointPayload): Promise<void> => {
  await api.post('/points/teacher/give', payload);
};

export default api;
