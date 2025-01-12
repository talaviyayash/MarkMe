import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { NavLink } from "react-router-dom";

// Define the Navbar component
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const token = localStorage.getItem("token");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = token
    ? [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Classes", path: "/classes" },
        { name: "school", path: "/school" },
      ]
    : [
        { name: "Sign In", path: "/signin" },
        { name: "Sign Up", path: "/signup" },
      ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo or Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SchoolApp
        </Typography>

        {/* Desktop Navigation Links */}
        <Stack sx={{ display: { xs: "none", md: "flex" } }} direction="row">
          {menuItems.map(({ name, path }) => (
            <MenuItem
              key={name}
              onClick={handleMenuClose}
              sx={{
                "& a": {
                  color: "#ffff",
                  textDecoration: "none",
                },
              }}
            >
              <NavLink to={path} key={name}>
                <Typography color="inherit">{name}</Typography>
              </NavLink>
            </MenuItem>
          ))}
        </Stack>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {menuItems.map(({ name, path }) => (
              <MenuItem
                key={name}
                onClick={handleMenuClose}
                sx={{
                  "& a": {
                    color: "black",
                    textDecoration: "none",
                  },
                }}
              >
                <NavLink to={path} key={name}>
                  <Typography color="inherit">{name}</Typography>
                </NavLink>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
