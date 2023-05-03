import Home from "../pages/Home";
import Ayuda from "../pages/Ayuda";
import Emailjs from "../components/navbar/Emailjs";
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
];

export { routes };
