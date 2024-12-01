import React from "react";
import { styled, Select, SelectProps, MenuItem } from "@mui/material";

const StyledSelect = styled(Select)(({ disabled }) => ({
  "& .MuiSelect-select": {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: "23px",
    color: "#202024",
    padding: 8,
    "&:focus": {
      backgroundColor: "transparent",
    },
    "&::placeholder": {
      fontWeight: 400,
      color: "#898994",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: !disabled ? "#CBCBCF" : "transparent",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#CBCBCF",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#CBCBCF",
  },
}));

interface Option {
  label: string;
  value: string | number;
}

type MAMSelectProps = SelectProps & {
  options?: Option[];
};

const MAMSelect: React.FC<MAMSelectProps> = ({ options, ...props }) => {
  return (
    <StyledSelect {...props}>
      {options?.map(({ label, value }, index) => (
        <MenuItem value={value} key={index}>
          {label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default MAMSelect;
