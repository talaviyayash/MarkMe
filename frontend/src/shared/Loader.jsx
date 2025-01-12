import { CircularProgress, Box } from "@mui/material";

function FullscreenLoader() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: semi-transparent background
        zIndex: 1300, // Ensure it's above other UI elements
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default FullscreenLoader;
