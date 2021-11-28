import React, { useState } from "react";
import {
    GoogleMap,
    LoadScript,
    StreetViewPanorama,
} from "@react-google-maps/api";
import "../index.css";
import mapController from "../controllers/mapController";

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
    const [position, setPosition] = useState(null);

    return (
        <div>
            <LoadScript googleMapsApiKey={API_KEY}>
                <GoogleMap
                    mapContainerClassName={"StreetViewContainer"}
                    onLoad={() => mapController.onLoad(setPosition)}
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
                    onClick={mapController.onMapClick}
                />
            </LoadScript>
        </div>
    );
}

export default React.memo(MapViewport);
