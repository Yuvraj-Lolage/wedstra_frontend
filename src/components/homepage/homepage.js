import React, { useEffect, useState } from 'react'
import { getCurrentUser, findUserDetailsByUserName } from "../../Auth/UserServices";
import axiosInstance from '../../API/axiosInstance';
export default function Homepage() {

  const [currentUser, setcurrentUser] = useState();
  const [loggedInUser, setLoggedInUser] = useState();
  const [open, setOpen] = useState(false);
  useEffect(()=>{
      setcurrentUser(getCurrentUser);
      const message = sessionStorage.getItem("message");

      if(message){
        setOpen(true);
      }
    },[])

  findUserDetailsByUserName(currentUser);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("Uploaded file:", file);
  }
  return (
    <div>
      <h1>This is homepage</h1>
      { currentUser ? <h1>Current User = {JSON.stringify(currentUser)}</h1> : <h1>No user found</h1> }
       <form>
        <div>
          <label htmlFor="fileUpload">Upload a file:</label>
          <input 
            type="file" 
            id="fileUpload" 
            name="fileUpload" 
            onChange={handleFileUpload} 
          />
        </div>
      </form>
    </div>
  )
}
