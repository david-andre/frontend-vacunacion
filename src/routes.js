
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import EventIcon from "@mui/icons-material/Event";
import Solicitantes from "./views/owners/Solicitantes";
import Lugares from "./views/owners/Lugares";

const routes = {
  owners: [
    {
      path: "/solicitantes",
      name: "Solicitantes de Vacuna",
      component: Solicitantes,
      layout: "/vacunacion",
      icon: <DashboardRoundedIcon />,
    },
    {
      path: "/lugares",
      name: "Lugares de Vacunación",
      component: Lugares,
      layout: "/vacunacion",
      icon: <EventIcon />,
    },
  ],
};
export default routes;
