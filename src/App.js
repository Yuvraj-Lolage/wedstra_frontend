import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import RegistrationForm from './components/User Register/register';
import RegisterSuccessful from './components/Registration Success/RegistrationSuccess';
import LoginForm from './components/Login/Login';
import LoginSuccessful from './components/Login/LoginSuccess';
import Navbar from './components/Navbar/Navbar';
import VendorRegister from './components/VendorRegister/VendorRegister';
import Alert from './components/Alerts/Alert';
import { useState } from 'react';
import VendorDashboard from './components/Vendor Dashboard/VendorDashboard';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import ServiceForm from './components/Create Service/ServiceForm';

function App() {
  const [alert, setAlert] = useState({ type: "", message: "", isOpen: false, onClose:null })

  const showAlert = (type, message, onClose = null) => {
    setAlert({ type, message, isOpen: true, });

    setTimeout(() => {
      setAlert({ type: "", message: "", isOpen: false, onClose });
    }, 5000);
  };

  const closeAlert = () => {
    if (alert.onClose) alert.onClose(); // Call the provided onClose function
    setAlert({ type: "", message: "", isOpen: false, onClose: null });
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Alert type={alert.type} message={alert.message} isOpen={alert.isOpen} onClose={ closeAlert }/>
        <Routes>
          {/* <Route path='/' element={<Navigate to="/home" replace />} /> */}
          <Route path='/' element={<Homepage />} />
          <Route path='/user-register' element={<RegistrationForm />} />
          <Route path='/vendor-register' element={<VendorRegister />} />
          <Route path='/register-success' element={<RegisterSuccessful />} />
          <Route path='/vendor-login' element={<LoginForm showAlert={showAlert} />} />
          <Route path='/login-success' element={<LoginSuccessful />} />
          <Route path='/vendor-dashboard' element={<VendorDashboard />} />
          <Route path='/service-details' element={<ServiceDetails />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
