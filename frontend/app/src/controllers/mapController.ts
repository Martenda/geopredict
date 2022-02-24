import mapResource from "../resources/mapResource";
import scoreResource from "../resources/scoreResource";
import { Map } from "../types/map";
import getDistance from "../utils/get-distance";

function calculateScorePoints(distance) {
    let points = 5000 - Math.trunc(distance);

    if (points < 0) {
        points = 0;
    }

    return points;
}

async function onMapClick(
    event: google.maps.MapMouseEvent,
    realPosition: any,
    map: Map
) {
    const pickedPosition = event.latLng;

    const distance = getDistance(
        pickedPosition as google.maps.LatLng,
        new google.maps.LatLng(realPosition.lat, realPosition.lng)
    );

    const points = calculateScorePoints(distance);

    const score = {
        map,
        points,
        place: pickedPosition?.toString(),
    };

    try {
        const response = await scoreResource.create(score);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
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
