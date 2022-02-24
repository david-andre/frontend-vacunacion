import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SidebarLayout from "../components/sidebar/SidebarLayout";
import TopBar from "../components/TopBar";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import routes from "../routes";

const drawerWidth = 251;

const Owner = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const switchRoutes = (
    <Switch>
      {routes.owners.map((route, key) => {
        if (route.layout === "/vacunacion") {
          return (
            <Route
              path={route.layout + route.path}
              component={route.component}
              key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/vacunacion" to="/vacunacion/solicitante" />
    </Switch>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar
        toggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        routes={routes.owners}
      />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <SidebarLayout
          mobileOpen={mobileOpen}
          toggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
          routes={routes.owners}
          user={"owner"}
        />
      </Box>
      <div className="container p-3">
        <Toolbar />
        {switchRoutes}
      </div>
    </Box>
  );
};
export default Owner;
