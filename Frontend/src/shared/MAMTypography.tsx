import React from "react";
import { Typography, styled } from "@mui/material";

// Using the styled API to customize Typography globally
const CustomeTypography = styled(Typography)({
  // Customize all typography styles here
  fontFamily: "DM Sans, sans-serif",
  letterSpacing: "0.5px",
  lineHeight: "1.6",
  textTransform: "capitalize",
});

const MAMTypography: React.FC<React.ComponentProps<typeof Typography>> = ({
  children,
  ...props
}) => {
  return <CustomeTypography {...props}>{children}</CustomeTypography>;
};

export default MAMTypography;
