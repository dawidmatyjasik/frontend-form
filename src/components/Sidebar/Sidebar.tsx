import {
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import PeopleIcon from "@mui/icons-material/People";
import ErrorIcon from "@mui/icons-material/Error";
import { Item } from "./Item";

const items = [
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

interface ISidebar {
  onClose: (props: boolean) => void;
  open: boolean;
}

export const Sidebar = (props: ISidebar) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <a href="https://www.letowskiconsulting.pl/" target="_blank">
              <img
                src="https://www.letowskiconsulting.pl/wp-content/uploads/2019/04/LetowskiLogo1.png"
                alt=""
                width={150}
              />
            </a>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <Item
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <Typography color="neutral.100" variant="subtitle2">
            Need more features?
          </Typography>
          <Typography color="neutral.500" variant="body2">
            Check out our Pro solution template.
          </Typography>
          {/* LINK */}
          <Button
            color="secondary"
            component="a"
            endIcon={<OpenInNewIcon />}
            fullWidth
            sx={{ mt: 2 }}
            variant="contained"
          >
            Pro Live Preview
          </Button>
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
