import axios from "axios";

interface SignUp {
  email: String,
  password: String,
}

interface SignIn {
  userName: String,
  email: String,
  password: String,
  confirmPassword: String
}

interface Verify {
  email: string,
  otp: string,
}

const API = axios.create({ baseURL: "http://localhost:3001/api/v1" });

API.interceptors.request.use((req: any) => {
  const data = localStorage.getItem("userProfile");
  if (data) {
    console.log("DATA WHAT THE HELL", JSON.parse(data)?.token)
    req.headers.Authorization = `Bearer ${
      JSON.parse(data)?.token
    } `;
  }
  return req;
});

export const updatePost = (id: String, updatedPost: any) =>
  API.patch(`/posts/${id}`, updatedPost);

// Sign in route
export const signIn = (formData: SignUp) => API.post("user/signin", formData);
export const signUp = (formData: SignIn) => API.post("/user/signup", formData);
export const verification = (formData: Verify) => API.post("/user/verify-user", formData);
export const getUser = (id: String) => API.get(`/user/get-user/${id}`);
