import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Delete, Edit, Preview } from "@mui/icons-material";

const Actions = ({ params }) => {
  return (
    <Box>
      <Tooltip title="Edytuj">
        <IconButton>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Usuń">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Actions;
