import { useLocation } from "react-router-dom";
import routes from "../routes";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

const TopBar = (props) => {
  const handleDrawerToggle = () => {
    props.toggle();
  };

  const location = useLocation();

  return (
    <AppBar
      position="absolute"
      sx={{
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ backgroundColor: "white", color: "black" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {props.routes.map((route) => {
            if (route.layout + route.path === location.pathname) {
              return route.name;
            } else return false;
          })}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
