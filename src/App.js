import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './styles/App.css'
import NavBar from './components/UI/navbar/NavBar';
import AppRouter from './components/AppRouter';


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>

    </BrowserRouter>
  );
}

export default App;
