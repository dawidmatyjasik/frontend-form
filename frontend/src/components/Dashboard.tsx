import { useState } from "react";
import Box from "@mui/material/Box";
import { Navbar } from "./Navbar/Navbar";
import { Sidebar } from "./Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PageWrapper } from "./Content/PageWrapper";
import { PersonalPage } from "../pages/PersonalPage";
import { ContentWrapper } from "./Content/ContentWrapper";

export const Dashboard = () => {
  const [open, setOpen] = useState<boolean>(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar toggleDrawer={toggleDrawer} open={open} />
      <Sidebar toggleDrawer={toggleDrawer} open={open} />
      <PageWrapper>
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/personal" element={<PersonalPage />} />
          </Routes>
        </ContentWrapper>
      </PageWrapper>
    </Box>
  );
};
