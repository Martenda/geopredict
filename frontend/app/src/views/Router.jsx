import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "../services/navigationService";

import Play from "./play/Play.jsx";
import Login from "./auth/Login";

import MapViewport from "../components/MapViewport.jsx";
import Drawer from "../components/drawer/Drawer";
import Scores from "./scores/Scores";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${routes.DEFAULT}`} element={<Drawer />} />
                <Route path={`${routes.PLAY}/:id`} element={<MapViewport />} />
                <Route path={`${routes.PLAY}`} element={<Play />} />
                <Route path={`${routes.SCORES}`} element={<Scores />} />
                <Route path={`${routes.LOGIN}`} element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
