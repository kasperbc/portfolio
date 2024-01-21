import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Epistasis from './pages/gamepages/Epistasis';
import TheLastRevenant from './pages/gamepages/TheLastRevenant';
import BloomingLove from './pages/gamepages/BloomingLove';
import HopeOnTheSurface from './pages/gamepages/TheresHopeOnTheSurface';
import DescendFella from './pages/gamepages/DescendFella';
import ConflictOfWizards from './pages/gamepages/ConflictOfWizards';
import SuperMalarioBros from './pages/gamepages/SuperMalarioBros';
import SuperMalario3D from './pages/gamepages/SuperMalario3D';

const Main = () => {
    return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/epistasis' element={<Epistasis />}></Route>
      <Route exact path='/the-last-revenant' element={<TheLastRevenant />}></Route>
      <Route exact path='/blooming-love' element={<BloomingLove />}></Route>
      <Route exact path='/theres-hope-on-the-surface' element={<HopeOnTheSurface />}></Route>
      <Route exact path='/descend-fella' element={<DescendFella />}></Route>
      <Route exact path='/conflict-of-wizards' element={<ConflictOfWizards />}></Route>
      <Route exact path='/super-malario-bros' element={<SuperMalarioBros />}></Route>
      <Route exact path='/super-malario-3d' element={<SuperMalario3D />}></Route>
    </Routes>
  );
}

export default Main;