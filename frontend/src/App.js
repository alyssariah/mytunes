import React, {useState, useEffect} from 'react';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent'
import Main from './components/Main'


function App() {



  return (
    <>
    <HeaderComponent />
    <Main />
    <FooterComponent />
    </>
  );
}

export default App;
