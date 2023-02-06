import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import PeopleIcon from "@mui/icons-material/People";
import ErrorIcon from "@mui/icons-material/Error";

export const items = [
  {
    href: "/",
    icon: <DashboardIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/dane-uczestnika",
    icon: <PeopleIcon fontSize="small" />,
    title: "Dane osobowe",
  },
  {
    href: "/dane-uczestnika-w-projekcie",
    icon: <ShoppingCartIcon fontSize="small" />,
    title: "Uczestnik w projekcie",
  },
  {
    href: "/doradztwo-zawodowe",
    icon: <PersonIcon fontSize="small" />,
    title: "Doradztwo zawodowe",
  },
  {
    href: "/staz",
    icon: <SettingsIcon fontSize="small" />,
    title: "Staż",
  },
  {
    href: "/posrednictwo-pracy",
    icon: <LockIcon fontSize="small" />,
    title: "Pośrednictwo pracy",
  },
  {
    href: "/podjecie-zatrudnienia",
    icon: <AddIcon fontSize="small" />,
    title: "Podjęcie zatrudnienia",
  },
  {
    href: "/zakonczenie-udzialu",
    icon: <AddIcon fontSize="small" />,
    title: "Zakończenie udziału w projekcie",
  },
  {
    href: "/kontrole",
    icon: <AddIcon fontSize="small" />,
    title: "Kontrole szkoleń i staży",
  },
  {
    href: "/wyplaty",
    icon: <AddIcon fontSize="small" />,
    title: "Wypłaty dla uczestników",
  },
  {
    href: "/404",
    icon: <ErrorIcon fontSize="small" />,
    title: "Error",
  },
];
