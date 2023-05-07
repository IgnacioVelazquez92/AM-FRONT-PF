import Home from "../pages/Home";
import Ayuda from "../pages/Ayuda";
import Emailjs from "../components/navbar/Emailjs";
import ConfigUser from "../pages/ConfigUser";
import TableUserAdmin from "../pages/TableUserAdmin";
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
    Element: Emailjs,
  },
  {
    path: "/edit-user/:id",
    Element: ConfigUser,
  },
  {
    path: "/admin-user",
    Element: TableUserAdmin,
  },
];

export { routes };
