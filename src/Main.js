import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Epistasis from './pages/gamepages/Epistasis';

const Main = () => {
    return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/epistasis' element={<Epistasis />}></Route>
    </Routes>
  );
}

export default Main;