import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MapItem from "../maps/components/MapItem";
import playController from "../../controllers/playController";

export default function Play() {
    const [maps, setMaps] = useState([])
    
    useEffect(() => {
        (async () => {
            await playController.initialize(setMaps)
        })()
    }, [])

    if(!maps.length) {
        return <></>
    }

    return (
        <>
        {   
            maps.map(map => {
                return (
                    <MapItem 
                        map={map}
                        onButtonClick={mapId => playController.playSelectedMap(mapId)}
                    />
                )
            })
        }
        </>
    )
}
