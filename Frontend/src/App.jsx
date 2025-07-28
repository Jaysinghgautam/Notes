import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import ProtectedRoutes from './routes/ProtectedRoutes';
  import axios from 'axios';


export default function App() {


const API_BASE = 'https://your-backend-url.com/api'; // replace with your backend URL

  const register = async (name, email, password) => {
  return await axios.post(`${API_BASE}/register`, {
    name,
    email,
    password,
  });
};

 const login = async (email, password) => {
  return await axios.post(`${API_BASE}/login`, {
    email,
    password,
  });
};



// const handleSubmit = async () => {
//   try {
//     const response = await axios.post('https://notes-theta-henna.vercel.app/api/login', {
//       email: 'user@example.com',
//       password: 'yourpassword',
//     });

//     console.log('Server response:', response.data);
//   } catch (error) {
//     console.error('Error connecting to backend:', error.message);
//   }
// };

  return (
  <>
  <BrowserRouter>
  <Toaster/>
  <Routes>
    <Route path='/' element={<ProtectedRoutes/>}>
        <Route index element={<Home/>}></Route>
    
    </Route>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
  
  </BrowserRouter>
  
  
  </>
  )
}
