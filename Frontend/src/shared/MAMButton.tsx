import { styled } from "@mui/system";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const StyleButton = styled(Button)<{ isloading?: string }>(
  ({ theme, isloading }) => ({
    background:
      "linear-gradient(132.61deg, var(--primaryDarker) 32.09%, var(--primaryGradientLighter) 163.78%)",
    border: 0,
    borderRadius: "8px !important",
    padding: "12px 66px",
    minWidth: "146px",
    color: "var(--white)",
    textTransform: "none",
    fontWeight: 700,
    lineHeight: "23px",
    fontSize: 18,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    "& > span": {
      display: "flex",
      alignItems: "center",
    },
    "& .content": {
      opacity: isloading ? 0 : 1,
      visibility: isloading ? "hidden" : "visible",
      margin: 0,
      fontSize: 18,
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
      },
    },
    "& .loader": {
      position: "absolute",
      display: isloading ? "block" : "none",
      left: "50%",
      transform: "translate(-50%)",
      "& > span": {
        fontSize: "14px",
        lineHeight: "23px",
        whiteSpace: "nowrap",
        color: "var(--primary)",
        "& .MuiCircularProgress-root": {
          width: "20px",
          height: "20px",
          verticalAlign: "middle",
          marginLeft: "10px",
        },
      },
    },
    "& .text": {
      transform: "",
    },
    "&:disabled": {
      background: "var(--primaryBg)",
      color: "#F5F5F5",
    },
    "&.MuiButton-outlined": {
      background: "transparent",
      border: " 1px solid var(--primary)",
      color: "var(--primary)",
    },
    "& a": {
      color: "var(--white)",
    },
  })
);

interface MAMButtonProps extends ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
}

const MAMButton: React.FC<MAMButtonProps> = ({
  onClick = () => {},
  children,
  isLoading,
  disabled,
  loadingText,
  ...rest
}) => (
  <StyleButton
    {...rest}
    disableElevation
    onClick={(e) => (onClick ? onClick(e) : null)}
    disabled={isLoading || disabled}
    isloading={isLoading ? isLoading?.toString() : undefined}
  >
    <span>
      <span className="loader">
        {loadingText ? (
          <span>
            {loadingText}
            <CircularProgress size={16} color="inherit" />
          </span>
        ) : (
          <CircularProgress size={24} color="inherit" />
        )}
      </span>
      <span className="content">{children}</span>
    </span>
  </StyleButton>
);

export default MAMButton;
