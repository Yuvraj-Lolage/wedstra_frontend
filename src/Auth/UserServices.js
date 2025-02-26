import { jwtDecode } from "jwt-decode";
import axiosInstance from "../API/axiosInstance";
import { useNavigate } from "react-router-dom";

export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.sub; // Assuming 'sub' contains the username
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};


export function findUserDetailsByUserName(username){
  const token = localStorage.getItem('token');
  axiosInstance.get(`/user/get-user/${ username }`,{
    headers:{
      Authorization: `Bearer ${ token }`
    }
  })
  .then((response) => {
    localStorage.setItem("user", JSON.stringify(response.data));
    
  })
  return null;
}
