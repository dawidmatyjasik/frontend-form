import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";

export const Toolbar = ({ setOpen }) => {
  return (
    <>
      <GridToolbarContainer>
        <Box style={{ flex: 1 }}>
          <Button startIcon={<AddIcon />} onClick={() => setOpen(true)}>
            Dodaj
          </Button>
          <GridToolbarDensitySelector
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          />
          <GridToolbarExport />
        </Box>
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    </>
  );
};
