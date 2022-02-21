import navigationService from "../services/navigationService";

const maps = [
    {
        id: "1",
        name: "Mapa 01",
        places: [],
    },
    {
        id: "2",
        name: "Mapa 02",
        places: [],
    },
    {
        id: "3",
        name: "Mapa 03",
        places: [],
    },
];

function initialize(setMaps: Function) {
    setMaps(maps);
}

function playSelectedMap(mapId: string) {
    return navigationService.navigateTo(`/play/${mapId}`);
}

const playController = {
    initialize,
    playSelectedMap,
};

export default playController;
