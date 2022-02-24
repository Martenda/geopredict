import React, { useState } from "react";
import {
    GoogleMap,
    LoadScript,
    StreetViewPanorama,
} from "@react-google-maps/api";
import "../index.css";
import mapController from "../controllers/mapController";
import { useParams } from "react-router-dom";
import Drawer from "./drawer/Drawer";

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultStreetViewOptions = {
    disableDefaultUI: true,
    enableCloseButton: false,
    showRoadLabels: false,
};

const defaultMapOptions = {
    disableDefaultUI: true,
};

function MapViewport() {
    const { id } = useParams();

    const [position, setPosition] = useState(null);
    const [map, setMap] = useState(null);

    return (
        <Drawer>
            <LoadScript googleMapsApiKey={API_KEY}>
                <GoogleMap
                    mapContainerClassName={"StreetViewContainer"}
                    onLoad={() => mapController.onLoad(id, setPosition, setMap)}
                >
                    <StreetViewPanorama
                        position={position}
                        visible={true}
                        options={defaultStreetViewOptions}
                    />
                </GoogleMap>
                <GoogleMap
                    mapContainerClassName={"MapContainer"}
                    center={{ lat: 0, lng: 0 }}
                    zoom={3}
                    options={defaultMapOptions}
                    onClick={(event) =>
                        mapController.onMapClick(event, position)
                    }
                />
            </LoadScript>
        </Drawer>
    );
}

export default React.memo(MapViewport);
