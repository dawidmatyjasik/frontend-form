import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

export const Toolbar = ({ setOpen }) => {
  return (
    <>
      <GridToolbarContainer>
        <Button startIcon={<AddIcon />} onClick={() => setOpen(true)}>
          Dodaj
        </Button>
        <GridToolbarDensitySelector
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        />
        <GridToolbarExport />
      </GridToolbarContainer>
    </>
  );
};
