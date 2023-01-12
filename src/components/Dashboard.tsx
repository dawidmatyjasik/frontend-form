import { useState } from "react";
import Box from "@mui/material/Box";
import { Navbar } from "./Navbar/Navbar";
import { Sidebar } from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { PageWrapper } from "./Content/PageWrapper";
import { ContentWrapper } from "./Content/ContentWrapper";

export const Dashboard = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar toggleDrawer={toggleDrawer} open={open} />
      <Sidebar toggleDrawer={toggleDrawer} open={open} />
      <PageWrapper>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </PageWrapper>
    </Box>
  );
};
