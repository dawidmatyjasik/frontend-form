import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Sidebar } from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

export const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Outlet />
        </Box>
      </DashboardLayoutRoot>
      <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
    </>
  );
};
