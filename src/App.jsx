
import './App.css';
import React from 'react';
import Intro from "./components/intro";

import User from "./components/githubsearch/user";


const App = () => {
  return <div className='main'>
    <Intro/>

    <User/>
  </div>;
};

export default App;


