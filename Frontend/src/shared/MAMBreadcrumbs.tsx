import { Breadcrumbs, styled } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router"; // Updated to use 'react-router-dom'

interface Route {
  label?: string;
  path?: string;
}

interface MAMBreadcrumbsProps {
  breadcrumbsRoutes?: Route[];
}

const StyledBreadcrumbs = styled(Breadcrumbs)(() => ({
  "& .MuiBreadcrumbs-li": {
    "& a": {
      fontSize: 16,
      color: "var(--gray)",
      fontWeight: 500,
      "&.active": {
        color: "var(--blackGray)",
      },
    },
  },
  "& .MuiBreadcrumbs-separator": {
    color: "var(--gray)",
    margin: "0 4px",
  },
}));

const MAMBreadcrumbs: React.FC<MAMBreadcrumbsProps> = ({
  breadcrumbsRoutes,
}) => {
  const { pathname } = useLocation();
  return (
    <StyledBreadcrumbs aria-label="breadcrumb">
      {breadcrumbsRoutes?.map((route, i) => (
        <Link
          key={i}
          to={route?.path || ""}
          className={pathname === route?.path ? "active" : ""}
        >
          {route?.label || ""}
        </Link>
      ))}
    </StyledBreadcrumbs>
  );
};

export default MAMBreadcrumbs;
