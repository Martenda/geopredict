import mapResource from "../resources/mapResource";
import { Map } from "../types/map";
import getDistance from "../utils/get-distance";

function onMapClick(event: google.maps.MapMouseEvent, realPosition: any) {
    const pickedPosition = event.latLng;

    const distance = getDistance(
        pickedPosition as google.maps.LatLng,
        new google.maps.LatLng(realPosition.lat, realPosition.lng)
    );

    alert(distance);
}

async function onLoad(id: string, setPosition: Function, setMap: Function) {
    const map: Map = await mapResource.findById(id);

    const randomPlaceIndex = Math.floor(Math.random() * map.places.length);
    const randomPlace = map.places[randomPlaceIndex];

    setMap(map);

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
