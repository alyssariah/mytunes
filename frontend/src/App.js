import React, {useState, useEffect} from 'react';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import AllSongs from './components/AllSongs';
import FaveSongs from './components/AllSongs';
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


<Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/All" component={AllSongs}/>
    <Route exact path="/Faves" component={FavoritesComponent}/>
<Redirect to="/"/>
</Switch> 