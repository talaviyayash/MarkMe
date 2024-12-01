import { Box, Stack } from "@mui/material";
import React from "react";
import Imag1 from "../../../assets/login.jpg";
import MAMTextField from "../../../shared/MAMTextField";
import MAMTypography from "../../../shared/MAMTypography";
import MAMButton from "../../../shared/MAMButton";
import { Link } from "react-router";

const Login = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          backgroundImage: `url(${Imag1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "blur(1px)",
          zIndex: 1,
          height: "calc(100vh - 77.2px)",
        }}
      />
      <Stack
        sx={{
          position: "relative",
          zIndex: 2,
          color: "black",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 77.2px)",
        }}
      >
        <Stack
          sx={{
            background: "rgba(255, 255, 255, 1)",
            width: 400,
            padding: 4,
            borderRadius: 4,
          }}
        >
          <MAMTypography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: 400 }}
          >
            Log In
          </MAMTypography>
          <Stack gap={3}>
            <Box>
              <MAMTypography variant="subtitle2" sx={{ color: "gray" }}>
                Email
              </MAMTypography>
              <MAMTextField sx={{ width: "100%" }} type="email" />
            </Box>
            <Box>
              <MAMTypography variant="subtitle2" sx={{ color: "gray" }}>
                Password
              </MAMTypography>
              <MAMTextField sx={{ width: "100%" }} />
            </Box>
            <Box>
              <MAMTypography
                variant="subtitle2"
                sx={{
                  color: "gray",
                  textAlign: "end",
                  cursor: "pointer",
                  ":hover": { textDecoration: "underline" },
                }}
              >
                <Link
                  to="forget-password"
                  style={{ color: "gray", textDecoration: "inherit" }}
                >
                  Forget your password?
                </Link>
              </MAMTypography>
            </Box>
            <Box>
              <MAMButton
                sx={{
                  width: "100%",
                  borderRadius: "25px !important",
                  "& .content": {
                    fontSize: 16,
                  },
                }}
              >
                Log In
              </MAMButton>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;
