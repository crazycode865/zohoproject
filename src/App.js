import { Route,Router,Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Menu from './Menu.jsx';
import Home from './Home.jsx';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Menu/>
    <Routes>
        <Route  exact path='/signup' element={<Signup/>}/>
        <Route  exact path='/login' element={<Login/>}/>
        <Route  exact path='/home' element={<Home/>}/>
        
        </Routes>
    </>
  );
}

export default App;
