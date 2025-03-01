import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import RegistrationForm from './components/Register/register';
import RegisterSuccessful from './components/Register/RegisterSuccessful';
import LoginForm from './components/Login/Login';
import LoginSuccessful from './components/Login/LoginSuccess';
import Navbar from './components/Navbar/Navbar';
import VendorRegister from './components/VendorRegister/VendorRegister';
import Alert from './components/Alerts/Alert';
import { useState } from 'react';
import VendorDashboard from './components/Vendor Dashboard/VendorDashboard';
import ServiceForm from './components/Verndor Services/ServiceForm';

function App() {
  const [alert, setAlert] = useState({ type: "", message: "", isOpen: false })

  const showAlert = (type, message) => {
    setAlert({ type, message, isOpen: true });

    setTimeout(() => {
      setAlert({ type: "", message: "", isOpen: false });
    }, 5000);
  };


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Alert type={alert.type} message={alert.message} isOpen={alert.isOpen} />
        <Routes>
          {/* <Route path='/' element={<Navigate to="/home" replace />} /> */}
          <Route path='/' element={<Homepage />} />
          <Route path='/user-register' element={<RegistrationForm />} />
          <Route path='/vendor-register' element={<VendorRegister />} />
          <Route path='/register-success' element={<RegisterSuccessful />} />
          <Route path='/vendor-login' element={<LoginForm showAlert={showAlert} />} />
          <Route path='/login-success' element={<LoginSuccessful />} />
          <Route path='/vendor-dashboard' element={<VendorDashboard />} />
          <Route path='/create-service' element={<ServiceForm />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
