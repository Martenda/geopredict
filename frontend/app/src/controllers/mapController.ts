import mapResource from "../resources/mapResource";
import { Map } from "../types/map";

function onMapClick(event: google.maps.MapMouseEvent) {
    alert(event.latLng);
}

async function onLoad(setPosition: Function) {
    const id = "123";
    const map: Map = await mapResource.findById(id);

    const randomPlaceIndex = Math.floor(Math.random() * map.places.length);
    const randomPlace = map.places[randomPlaceIndex];

    setPosition({
        lat: randomPlace.coordinates[0],
        lng: randomPlace.coordinates[1],
    });
}

const mapController = {
    onMapClick,
    onLoad,
};

export default mapController;
