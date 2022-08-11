import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import SignUp from './../users/SignUp';
import SignIn from './../users/SignIn';
import SideBar from '../navigation/SideBar';
import ForgotPassword from '../users/ForgotPassword';

const App = () => {
  return (
    <div className="container">
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
    </div>
  )
}

export default App