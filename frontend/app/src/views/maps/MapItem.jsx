import { Button } from "@material-ui/core";

const MapItem = ({ map, onButtonClick }) => {
    return (
        <div className="center" style={{ margin: "3rem" }}>
            {map.name}
            <br />
            <Button onClick={() => onButtonClick(map.id)}>Jogar</Button>
        </div>
    );
};

export default MapItem;
