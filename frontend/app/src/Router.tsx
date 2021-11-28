import React from 'react';
import MapViewport from './components/MapViewport.jsx';
import Drawer from './components/drawer/Drawer.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Maps from './views/maps/Maps.jsx';
import { routes } from './services/navigationService';

function Router() {
  return (
    <BrowserRouter>
      <Drawer>
        <Routes>
          <Route path={routes.PLAY} element={<MapViewport/>} />
          <Route path={routes.MAPS} element={<Maps />} />
        </Routes>
      </Drawer>
    </BrowserRouter>
  );
}

export default Router;
