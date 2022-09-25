import logo from './logo.svg';
import './App.css';
import Menu from './Component/Menu';
import { Route, Router, Routes } from 'react-router';
import Car from './Component/Car';
import Contact from './Component/Contact';
import Login from './Component/Login';

function App() {
  return (
   <>
   {/* <Login/> */}
    <Menu/>
    <Routes>
      <Route path='/' />
      <Route path='/car' element={<Car/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </>
  );
}

export default App;
