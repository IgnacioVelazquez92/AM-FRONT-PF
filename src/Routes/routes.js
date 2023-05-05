import Home from "../pages/Home";
import Ayuda from "../pages/Ayuda";
import Emailjs from "../components/navbar/Emailjs";
import EditUser from "../components/navbar/EditUser";
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
    Element: EditUser,
  },
];

export { routes };
