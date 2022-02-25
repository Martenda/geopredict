import { Button } from "@material-ui/core";
import { Map } from "../../../types/map";

type propTypes = { map: Map, onButtonClick: Function }

export default function MapItem({ map, onButtonClick }: propTypes ) {
    return (
        <div className="center" style={{margin: '3rem'}}>
            {map.name}
            <br/>
            <Button onClick={() => onButtonClick(map._id)}>Jogar</Button>
        </div>
    );
}
