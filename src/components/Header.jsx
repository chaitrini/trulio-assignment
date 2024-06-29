import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Trulia from "../assets/truali-icon.svg";
import { styled } from "@mui/system";

const pages = ["Products", "Pricing", "Blog"];

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  flexGrow: 1,
  textTransform: "none",
  fontSize: 16,
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  fontWeight: "bold",
  padding: "8px 16px",
  borderRadius: "10px",
  "&:hover": {
    color: "white",
    backgroundColor: theme.palette.text.secondary,
  },
}));

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        maxWidth: { xs: "100%", md: "100%", lg: "100%", xl: "100%" },
        backgroundColor: "white",
        color: "text.primary",
        boxShadow: "none",
        fontSize: "16px",
        padding: "0px",
      }}
    >
      <Container
        sx={{
          padding: "0 !important",
          margin: 0,
          maxWidth: { xs: "100%", md: "100%", lg: "100%", xl: "100%" },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: {
              xs: "space-between",
            },
          }}
        >
          {/* Box for trulia icon */}
          <Box sx={{ flexGrow: 0, display: "flex", justifySelf: "flex-start" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: 16 }}
            >
              <img src={Trulia} />
            </Typography>
          </Box>

          {/* Box for Buy, Rent, Mortage */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: {
                xs: "end",
                md: "end",
                lg: "space-between",
                xl: "space-between",
              },

              display: {
                xs: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
            }}
          >
            <Box
              sx={{
                width: "30%",
                alignItems: "center",
                display: {
                  xs: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
                flex: 0,
              }}
            >
              <StyledButton>Buy</StyledButton>

              <StyledButton>Rent</StyledButton>

              <StyledButton>Mortage</StyledButton>
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                display: {
                  xs: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                alignItems: "center",
              }}
            >
              <StyledButton>Saved Homes</StyledButton>
              <StyledButton>Saved Searches</StyledButton>

              <Button
                sx={{
                  color: "text.primary",
                  fontSize: "16px",
                  borderColor: "black",
                  textTransform: "none",
                  marginRight: 2,
                  marginLeft: 2,
                  fontWeight: "bold",
                  "&:hover": {
                    color: "text.secondary",
                  },
                }}
                variant="outlined"
              >
                Sign up or Log in
              </Button>
            </Box>
          </Box>

          <Box sx={{ flex: 0 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "none" }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
