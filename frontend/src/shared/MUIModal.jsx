import { Box, Modal } from "@mui/material";

const MUIModal = ({ children, sx = {}, ...props }) => {
  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...props}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 900,
          width: "100%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          outline: "none",
          ...sx,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default MUIModal;
