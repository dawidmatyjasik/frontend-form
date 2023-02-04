import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

export const Toolbar = ({ handleOpen }) => {
  return (
    <GridToolbarContainer>
      <Button startIcon={<AddIcon />} onClick={handleOpen}>
        Dodaj
      </Button>
      <GridToolbarDensitySelector
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};
