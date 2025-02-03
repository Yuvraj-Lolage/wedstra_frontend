import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register/register';
import Homepage from './components/homepage/homepage';
import RegistrationForm from './components/Register/register';
import RegisterSuccessful from './components/Register/RegisterSuccessful';
import Login from './components/Login/Login';

function App() {

  useEffect(()=>{
    
      try {
        axios.get("http://localhost:8001/vendor/getVendors", { 
          auth:{
            username:"user1",
            password:"password1"
          }
         })
          .then((response)=>{
            console.log(response.data);
            
          })
      } catch (err) {
          console.error(err);
          
      }
  },[])
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    // </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <RegistrationForm/> } />
          <Route path='/home' element={ <Homepage/> } />
          <Route path='/register-success' element={ <RegisterSuccessful/> } />
          <Route path='/login' element={ <Login/> } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
