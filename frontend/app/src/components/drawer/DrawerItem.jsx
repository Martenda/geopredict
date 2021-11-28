import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function DrawerItem({ label, Icon, onClick }) {
    return (
        <ListItem button onClick={onClick}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItem>
    );
}
