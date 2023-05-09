import Home from "../pages/Home";
import Ayuda from "../pages/Ayuda";
import ConfigUser from "../pages/ConfigUser";
import TableUserAdmin from "../pages/TableUserAdmin";
import Recupero from "../pages/Recupero";
import Admin from "../pages/Admin";

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
    path: "/admin-products",
    Element: Admin,
  },

  {
    path: "/*",
    Element: Home,
  },
];

export { routes };
