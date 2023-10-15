import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:5066/",
});

api.interceptors.request.use((config) => {
  const accessToken = sessionStorage.getItem("acess_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
api.interceptors.response.use(
  (response) => response
  ,
  (error) => {
      if (axios.isAxiosError(error)) {
        if(error.response){
            if (error.response.data) {
              if(error.response.data.mensagem){
                toast.error(error.response.data.mensagem)
              }
            }
            
        }
      }
    throw new Error(`HTTP error! Status: ${error.response.status}`);
  }
);
