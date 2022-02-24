import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import DrawerItem from "./DrawerItem";
import TrophyIcon from "@mui/icons-material/EmojiEvents";
import GameIcon from "@mui/icons-material/SportsEsports";
import navigationService, { routes } from "../../services/navigationService";

const drawerWidth = 240;

const ClippedDrawer = (props) => {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                color={"primary"}
                position={"fixed"}
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Geopredict
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                <Toolbar />
                <DrawerItem
                    label={"Play"}
                    Icon={GameIcon}
                    onClick={() => navigationService.navigateTo(routes.PLAY)}
                />
                <Divider />
                <DrawerItem
                    label={"Scores"}
                    Icon={TrophyIcon}
                    onClick={() => navigationService.navigateTo(routes.SCORES)}
                />
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <main>{props.children}</main>
            </Box>
        </Box>
    );
};

export default ClippedDrawer;
