import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "./services/navigationService";

import Drawer from "./components/drawer/Drawer.jsx";
import Play from "./views/play/Play.jsx";
import MapViewport from "./components/MapViewport.jsx";

function Router() {
    return (
        <BrowserRouter>
            <Drawer>
                <Routes>
                    <Route
                        path={`${routes.PLAY}/:id`}
                        element={<MapViewport />}
                    />
                    <Route path={`${routes.PLAY}`} element={<Play />} />
                </Routes>
            </Drawer>
        </BrowserRouter>
    );
}

export default Router;