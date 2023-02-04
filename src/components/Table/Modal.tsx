import { Box, Modal as ModalMUI, Typography } from "@mui/material";

const Modal = ({ open, handleClose, children }) => {
  return (
    <ModalMUI
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          // width: "min(",
          height: "90%",
          backgroundColor: "#F9FAFC",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          overflowY: "scroll",
        }}
      >
        {children}
      </Box>
    </ModalMUI>
  );
};

export default Modal;
