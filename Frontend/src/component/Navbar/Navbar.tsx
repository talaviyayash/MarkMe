import { Box, Stack } from "@mui/material";
import MAMImage from "../../shared/MAMImage";
import MAMTypography from "../../shared/MAMTypography";
import { Link, Outlet } from "react-router";

const Navbar = () => {
  return (
    <>
      <Stack
        sx={{
          maxHeight: 64,
          justifyContent: "space-between",
          padding: "16px  16px",
          flexDirection: "row",
          boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.5)",
        }}
      >
        <Box sx={{ width: "fit-content" }}>
          <MAMImage src="https://neteims.com/wp-content/themes/ims/assets/images/logo.png" />
        </Box>
        <Stack sx={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
          <MAMTypography
            variant="body1"
            sx={{
              ":hover": { color: "#0056b3" },
              cursor: "pointer",
              "& a": {
                textDecoration: "none",
                color: "rgba(0,0,0,.5) ",
                ":hover": { color: "#0056b3" },
              },
            }}
          >
            <Link to="/">Home</Link>
          </MAMTypography>
        </Stack>
        <Stack sx={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
          <MAMTypography
            variant="body1"
            sx={{
              ":hover": { color: "#0056b3" },
              cursor: "pointer",
              "& a": {
                textDecoration: "none",
                color: "rgba(0,0,0,.5) ",
                ":hover": { color: "#0056b3" },
              },
            }}
          >
            <Link to="/login">Login</Link>
          </MAMTypography>
          {/* <Box sx={{ width: "fit-content" }}>
        </Box> */}
        </Stack>
      </Stack>
      <Outlet />
    </>
  );
};

export default Navbar;
