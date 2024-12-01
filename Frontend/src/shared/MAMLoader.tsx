import { Box, BoxProps } from "@mui/material";
import styled from "@emotion/styled";
import RotateLoader from "react-spinners/RotateLoader";
import classNames from "classnames";

const Loader = styled(Box)({
  "&.fullPage": {
    marginTop: 0,
    top: 64,
    position: "fixed",
    right: 0,
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
  },
  "&.transParent": {
    background: "rgba(0,0,0,0.2)",
  },
  "&.inline": {
    marginTop: 0,
    height: "auto",
  },
});

type VariantType = "fullPage" | "transParent" | "inline";

interface MAMLoaderProps extends BoxProps {
  className?: string;
  speedMultiplier?: number;
  size?: number;
  variant?: VariantType;
  color?: string; // Ensure color is typed as string
}

const MAMLoader: React.FC<MAMLoaderProps> = ({
  className,
  speedMultiplier = 1,
  size = 18,
  variant,
  color = "#3498db", // Default to a plain string
  ...props
}) => {
  return (
    <Loader
      className={classNames(className, {
        fullPage: variant === "transParent" || variant === "fullPage",
        transParent: variant === "transParent",
        inline: variant === "inline",
      })}
      {...props}
    >
      <RotateLoader
        color={typeof color === "string" ? color : "#3498db"} // Ensure it's a string
        size={size}
        speedMultiplier={speedMultiplier}
      />
    </Loader>
  );
};

export default MAMLoader;
