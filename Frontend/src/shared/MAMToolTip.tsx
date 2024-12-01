import { Tooltip, TooltipProps, styled } from "@mui/material";
import React from "react";

const StyledToolTip = styled(Tooltip)({});

const MAMToolTip: React.FC<TooltipProps> = ({ ...rest }) => {
  const [show, setShow] = React.useState(false);
  return (
    <StyledToolTip
      {...{
        style: { cursor: "pointer" },
        open: show,
        onMouseEnter: () => setShow(true),
        onMouseLeave: () => setShow(false),
        onScroll: () => setShow(false),
        onPointerLeave: () => setShow(false),
        ...rest,
      }}
    />
  );
};

export default MAMToolTip;
