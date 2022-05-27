import axios from 'axios';

interface SignUp {
  email: String;
  password: String;
}

interface SignIn {
  userName: String;
  email: String;
  password: String;
  confirmPassword: String;
}

interface Verify {
  email: string;
  otp: string;
}

const URL = process.env.NODE_ENV === "development" ? "http://localhost:3001/api/v1" : "https://api.stablespay.com/api/v1"

const API = axios.create({baseURL: URL});

API.interceptors.request.use((req: any) => {
  const token = localStorage.getItem('userToken');
  if (token) {
    req.headers.Authorization = `Bearer ${(token)} `;
  }
  return req;
});

export const updateUser = (id: String, updateData: any) =>
  API.patch(`/user/update/${id}`, updateData);

// Sign in route
export const signIn = (formData: SignUp) => API.post('user/signin', formData);
export const signUp = (formData: SignIn) => API.post('/user/signup', formData);
export const verification = (formData: Verify) =>
  API.post('/user/verify-user', formData);
export const getUser = () => API.get(`/user/get-user`);
