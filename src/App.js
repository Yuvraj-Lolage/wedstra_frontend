import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import RegistrationForm from './components/Register/register';
import RegisterSuccessful from './components/Register/RegisterSuccessful';
import LoginForm from './components/Login/Login';
import LoginSuccessful from './components/Login/LoginSuccess';
import Navbar from './components/Navbar/Navbar';
import VendorRegister from './components/VendorRegister/VendorRegister';

function App() {

  // useEffect(()=>{
    
  //     try {
  //       axios.get("http://localhost:8001/vendor/getVendors", { 
  //         auth:{
  //           username:"user1",
  //           password:"password1"
  //         }
  //        })
  //         .then((response)=>{
  //           console.log(response.data);
            
  //         })
  //     } catch (err) {
  //         console.error(err);
          
  //     }
  // },[])
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    // </div>
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Navigate to="/home" replace />} />
            <Route path='/register' element={ <RegistrationForm/> } />
          <Route path='/home' element={ <Homepage/> } />
          <Route path='/register-success' element={ <RegisterSuccessful/> } />
          <Route path='/vendor-login' element={ <LoginForm/> } />
          <Route path='/login-success' element={ <LoginSuccessful/> } />
          <Route path='/vendor-register' element={ <VendorRegister/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
