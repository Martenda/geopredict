import scoreResource from "../resources/scoreResource";

async function loadScores(mapId: number) {
    const userToken = localStorage.getItem("userToken");
    if (userToken == null) return;

    const maps = await scoreResource.findScoresByMap(mapId, userToken);
    return maps;
}

export default { loadScores };
