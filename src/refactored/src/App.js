import React from 'react';
import './App.css';
import PhotoGrid from './components/PhotoGrid'
import Navbar from './components/Navbar'
import NavButtons from './components/NavButtons'
import Store from './store/Store'

const App = () => {


  return (
    <Store>
        <Navbar />
        <PhotoGrid />
        <NavButtons />
    </Store>
  );
}

export default App;
