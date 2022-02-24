import { useEffect, useState } from "react";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Modal,
    TextField,
    Typography,
} from "@material-ui/core";

import MapItem from "../maps/MapItem";
import playController from "../../controllers/playController";
import Drawer from "../../components/drawer/Drawer";
import Button from "@mui/material/Button";
import mapResource from "../../resources/mapResource";

const DEFAULT_MAP = {
    name: "",
    locations: [],
};

const DEFAULT_LOCATION = {
    latitude: "",
    longitude: "",
};

const modalContentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "80%",
    bgcolor: "white",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

const Maps = () => {
    const [maps, setMaps] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [newMap, setNewMap] = useState(DEFAULT_MAP);
    const [newLocation, setNewLocation] = useState(DEFAULT_LOCATION);

    useEffect(() => {
        (async () => {
            setMaps(await playController.loadAllMaps());
        })();
    }, []);

    const onAddNewLocation = () => {
        if (newLocation.latitude && newLocation.longitude) {
            const location = {
                latitude: newLocation.latitude,
                longitude: newLocation.longitude,
            };

            const locationsList = [...newMap?.locations, location];

            setNewMap({
                ...newMap,
                locations: locationsList,
            });
        }
    };

    const onMapCreationDone = async () => {
        try {
            const places = newMap.locations.map((location) => ({
                type: "Point",
                coordinates: [location.latitude, location.longitude],
            }));

            await mapResource.create({ name: newMap.name, places });
        } catch (error) {
            console.log(error);
        } finally {
            setNewMap(DEFAULT_MAP);
            setNewLocation(DEFAULT_LOCATION);
            setModalOpen(false);
        }
    };

    return (
        <Drawer>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                }}
            >
                <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                    <Box sx={modalContentStyle}>
                        <Typography style={{ margin: "2% 0" }} variant={"h5"}>
                            Adicionar novo mapa
                        </Typography>

                        <TextField
                            label={"Nome do mapa"}
                            style={{ margin: "2% 0" }}
                            variant={"outlined"}
                            value={newMap?.name}
                            onChange={({ target }) =>
                                setNewMap({ ...newMap, name: target.value })
                            }
                        />

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                margin: "10px 0",
                            }}
                        >
                            <TextField
                                label={"Latitude"}
                                value={newLocation.latitude}
                                variant={"outlined"}
                                onChange={({ target }) =>
                                    setNewLocation({
                                        ...newLocation,
                                        latitude: target.value,
                                    })
                                }
                            />
                            <TextField
                                label={"Longitude"}
                                value={newLocation.longitude}
                                variant={"outlined"}
                                onChange={({ target }) =>
                                    setNewLocation({
                                        ...newLocation,
                                        longitude: target.value,
                                    })
                                }
                            />
                            <Button
                                variant={"contained"}
                                onClick={onAddNewLocation}
                            >
                                Adicionar
                            </Button>
                        </div>

                        <Typography style={{ margin: "2% 0" }} variant={"h5"}>
                            Localizações adicionadas:
                        </Typography>

                        <List
                            style={{
                                overflow: "auto",
                                height: "50%",
                            }}
                        >
                            {newMap?.locations?.map((location, index) => (
                                <ListItem
                                    style={{
                                        backgroundColor:
                                            index % 2 === 0
                                                ? "white"
                                                : "whitesmoke",
                                    }}
                                >
                                    <ListItemText
                                        primary={`LAT: ${location?.latitude} | LON: ${location?.longitude}`}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Button
                            style={{ margin: "2% 0" }}
                            variant={"contained"}
                            onClick={onMapCreationDone}
                        >
                            Concluir
                        </Button>
                    </Box>
                </Modal>

                <Button
                    style={{ width: 150 }}
                    variant={"contained"}
                    onClick={() => setModalOpen(true)}
                >
                    Criar mapa
                </Button>

                <div style={{ display: "flex" }}>
                    {maps.map((map) => {
                        return (
                            <MapItem
                                map={map}
                                onButtonClick={(mapId) =>
                                    playController.playSelectedMap(mapId)
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </Drawer>
    );
};

export default Maps;
