import Home from "../pages/Home";
import Ayuda from "../pages/Ayuda";
import ConfigUser from "../pages/ConfigUser";
import TableUserAdmin from "../pages/TableUserAdmin";
import Recupero from "../pages/Recupero";

const routes = [
  {
    path: "/",
    Element: Home,
  },
  {
    path: "/ayuda",
    Element: Ayuda,
  },
  ,
  {
    path: "/recupero",
    Element: Recupero,
  },
  {
    path: "/edit-user",
    Element: ConfigUser,
  },
  {
    path: "/admin-user",
    Element: TableUserAdmin,
  },
  {
    path: "/*",
    Element: Home,
  },
];

export { routes };
