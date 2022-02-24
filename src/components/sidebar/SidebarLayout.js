import Drawer from "@mui/material/Drawer";
import Sidebar from "./Sidebar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SidebarLayout = ({ toggle, mobileOpen, drawerWidth, routes, user }) => {
  const handleDrawerToggle = () => {
    toggle();
  };
  const theme = createTheme({
    zIndex: {
      drawer: 1000,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Sidebar routes={routes}></Sidebar>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        <Sidebar routes={routes} user={user}></Sidebar>
      </Drawer>
    </ThemeProvider>
  );
};
export default SidebarLayout;
