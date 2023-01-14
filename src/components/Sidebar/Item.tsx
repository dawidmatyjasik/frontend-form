import { Box, Button, ListItem } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface IItem {
  href: string;
  title: string;
  icon: ReactNode;
}

export const Item = (props: IItem) => {
  const { href, icon, title, ...others } = props;
  const location = useLocation();
  const active: any = href ? location.pathname === href : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
      <Button
        startIcon={icon}
        disableRipple
        sx={{
          backgroundColor: active && "rgba(255,255,255, 0.08)",
          borderRadius: 1,
          color: active ? "secondary.main" : "neutral.300",
          fontWeight: active && "fontWeightBold",
          justifyContent: "flex-start",
          px: 3,
          textAlign: "left",
          textTransform: "none",
          width: "100%",
          "& .MuiButton-startIcon": {
            color: active ? "secondary.main" : "neutral.400",
          },
          "&:hover": {
            backgroundColor: "rgba(255,255,255, 0.08)",
          },
        }}
      >
        <Link to={href}>
          {" "}
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Link>
      </Button>
    </ListItem>
  );
};
