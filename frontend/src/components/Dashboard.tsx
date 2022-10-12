import { useState } from "react";
import Box from "@mui/material/Box";
import { Navbar } from "./Navbar/Navbar";
import { Sidebar } from "./Sidebar/Sidebar";
import { Content } from "./Content/Content";

export const Dashboard = () => {
  const [open, setOpen] = useState<boolean>(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar toggleDrawer={toggleDrawer} open={open} />
      <Sidebar toggleDrawer={toggleDrawer} open={open} />
      <Content />
    </Box>
  );
};
