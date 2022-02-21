import React from 'react';
import Drawer from './components/drawer/Drawer.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Play from './views/play/Play';
import { routes } from './services/navigationService';
import MapViewport from './components/MapViewport.jsx';

function Router() {
  return (
    <BrowserRouter>
      <Drawer>
        <Routes>
          <Route path={`${routes.PLAY}/:id`} element={<MapViewport/>} />
          <Route path={`${routes.PLAY}`} element={<Play/>} />
        </Routes>
      </Drawer>
    </BrowserRouter>
  );
}

export default Router;
