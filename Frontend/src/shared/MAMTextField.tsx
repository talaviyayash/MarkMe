import React from "react";
import { styled, TextField, TextFieldProps } from "@mui/material";

const StyledInput = styled(TextField)(({ disabled }) => ({
  "& .MuiInputBase-root": {
    "& .Mui-disabled": {
      WebkitTextFillColor: "#202024 !important",
    },
    "& .MuiInputBase-input": {
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "23px",
      color: "#202024",
      padding: 8,
      "&::-webkit-input-placeholder": {
        fontWeight: 400,
        color: "#898994",
      },
      "&:-webkit-autofill": {
        animation: "none !important",
        WebkitTextFillColor: "#000",
        WebkitBoxShadow: "0 0 0px 1000px rgba(0,0,0,0) inset",
        transition: "background-color 5000s ease-in-out 0s",
      },
      "&:-webkit-autofill:hover": {
        WebkitTextFillColor: "#000",
        WebkitBoxShadow: "0 0 0px 1000px rgba(0,0,0,0) inset",
        transition: "background-color 5000s ease-in-out 0s",
      },
      "&-webkit-autofill:focus": {
        WebkitTextFillColor: "#000",
        WebkitBoxShadow: "0 0 0px 1000px rgba(0,0,0,0) inset",
        transition: "background-color 5000s ease-in-out 0s",
      },
    },
    "&::before": {
      borderBottom: !disabled ? "1px solid #CBCBCF" : "0px",
    },
    "&:hover": {
      "&::before": {
        borderBottomWidth: "1px solid !important",
        borderBottomColor: "#CBCBCF !important",
      },
    },
  },
}));

const MAMTextField: React.FC<TextFieldProps> = (props) => (
  <StyledInput {...props} />
);

export default MAMTextField;
