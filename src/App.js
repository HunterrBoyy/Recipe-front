import { Route, Routes } from 'react-router-dom';import './App.css';
import RootLayOut from './components/RootLayOut';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Login from './auth/Login';
import { ToastContainer } from 'react-toastify';
import SignUp from './auth/SignUp';
import UserRoute from './components/UserRoute';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  
  return (
    <>
  
      <Routes>
        <Route path='/'  element={<RootLayOut/>} >
          <Route index element={<HomePage />} />

        <Route element={<UserRoute />}>

          <Route path="user/Login" element={<Login />} />
          <Route path="user/SignUp" element={<SignUp />} />
        </Route>
        <Route path="recipeDetail/:id" element ={<DetailPage/>} />
        </Route>
       
      </Routes>
      <ToastContainer autoClose= {1000} position='top-right' />
    </>
  );
}

export default App;
