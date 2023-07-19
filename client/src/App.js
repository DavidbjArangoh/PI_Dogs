import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Home from './Components/Home/Home.jsx';
import './App.css';;

function App() {
  return (
    <BrowserRouter>
      <div >
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
