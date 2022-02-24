import {
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import Drawer from "../../components/drawer/Drawer";
import playController from "../../controllers/playController";
import scoresController from "../../controllers/scoresController";

const DEFAULT_VALUE = "DEFAULT_VALUE";

const SCORES_FIXTURE = [
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 123, timeSpentInSeconds: 123312312 },
    { points: 12331312, timeSpentInSeconds: 123312312 },
];

const Scores = () => {
    const [selectedMap, setSelectedMap] = useState(DEFAULT_VALUE);
    const [maps, setMaps] = useState([]);
    const [scores, setScores] = useState(SCORES_FIXTURE);

    useEffect(() => {
        (async () => {
            setMaps(await playController.loadAllMaps());
        })();
    }, []);

    const onMapSelectHandler = async (selectedValue) => {
        setSelectedMap(selectedValue);
        if (selectedValue !== DEFAULT_VALUE) {
            const filteredScores = await scoresController.loadScores(
                selectedMap
            );
            setScores(filteredScores);
        }
    };

    return (
        <Drawer>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    flex: 1,
                    height: "100%",
                    flexDirection: "column",
                }}
            >
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                        variant={"h6"}
                        style={{ alignSelf: "center", marginRight: "2%" }}
                    >
                        Selecione um mapa para filtrar
                    </Typography>

                    <Select
                        variant={"outlined"}
                        value={selectedMap}
                        onChange={({ target }) =>
                            onMapSelectHandler(target.value)
                        }
                    >
                        <MenuItem value={DEFAULT_VALUE}>
                            Nenhum Selecionado
                        </MenuItem>
                        {maps.map((item) => (
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                        ))}
                    </Select>
                </div>

                <List
                    style={{
                        flex: 1,
                        display: "flex",
                        overflow: "auto",
                        height: "100%",
                        flexDirection: "column",
                    }}
                >
                    {scores
                        .sort((a, b) => (a.points > b.points ? -1 : 1))
                        .map((item, index) => (
                            <ListItem
                                style={{
                                    backgroundColor:
                                        index % 2 === 0
                                            ? "white"
                                            : "whitesmoke",
                                }}
                            >
                                <ListItemText
                                    primary={`Pontuação ${item.points}`}
                                    secondary={`Segundos em partida: ${item?.timeSpentInSeconds}`}
                                />
                            </ListItem>
                        ))}
                </List>
            </div>
        </Drawer>
    );
};

export default Scores;
