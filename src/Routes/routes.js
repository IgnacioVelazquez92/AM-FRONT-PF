import Home from "../pages/Home";
import Ayuda from "../pages/Ayuda";
import ConfigUser from "../pages/ConfigUser";
import TableUserAdmin from "../pages/TableUserAdmin";
import Recupero from "../pages/Recupero";
import Admin from "../pages/Admin";
import Error404 from "../components/error404/Error404";
import AboutUs from "../components/aboutus/AboutUs";

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
    path: "/AboutUs",
    Element: AboutUs,
  },

  {
    path: "/*",
    Element: Error404,
  },
];

export { routes };
