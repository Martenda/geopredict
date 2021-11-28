import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import DrawerItem from "./DrawerItem";
import TrophyIcon from "@mui/icons-material/EmojiEvents";
import GameIcon from "@mui/icons-material/SportsEsports";
import MapIcon from "@mui/icons-material/Map";
import navigationService, { routes } from "../../services/navigationService";

const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: "relative",
        width: drawerWidth,
    },
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 1.25,
    },
    toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6">Geopredict</Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <DrawerItem
                    label={"Play"}
                    Icon={GameIcon}
                    onClick={() => navigationService.navigateTo(routes.PLAY)}
                />
                <Divider />
                <DrawerItem
                    label={"Scores"}
                    Icon={TrophyIcon}
                    onClick={() => navigationService.navigateTo(routes.MAPS)}
                />
                <DrawerItem
                    label={"Maps"}
                    Icon={MapIcon}
                    onClick={() => navigationService.navigateTo(routes.MAPS)}
                />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    );
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
