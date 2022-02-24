import navigationService from "../services/navigationService";
import mapResource from "../resources/mapResource";

async function loadAllMaps() {
    const maps = await mapResource.findAll();
    return maps;
}

function playSelectedMap(mapId: string) {
    return navigationService.navigateTo(`/play/${mapId}`);
}

const playController = {
    loadAllMaps,
    playSelectedMap,
};

export default playController;
