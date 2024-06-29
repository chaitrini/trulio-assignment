import React from "react";
import { Box, Button, TextField, ButtonGroup, Typography } from "@mui/material"; // Replace with actual imports from Material-UI

import { styled } from "@mui/system";
import SearchComponent from "./Search";

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  flexGrow: 1,
  textTransform: "none",
  fontSize: 16,
  fontWeight: "bold",
  padding: "8px 16px",
  borderRadius: "10px",
  border: "unset",
  "&:hover": {
    color: theme.palette.text.secondary,
    backgroundColor: 'white',
  },
}));

const HomePageBanner = () => {
  return (
    <Box className="home-page-container" sx={{marginTop: '4px !important'}}>
      <img
        loading="auto"
        decoding="sync"
        fetchPriority="high"
        alt="residents of the neighborhood standing on steps in a tree covered street"
        src="https://www.trulia.com/images/app-shopping/homePage/extraLarge.jpg"
        srcSet="https://www.trulia.com/images/app-shopping/homePage/small.webp 390w, https://www.trulia.com/images/app-shopping/homePage/medium.webp 570w, https://www.trulia.com/images/app-shopping/homePage/large.webp 768w, https://www.trulia.com/images/app-shopping/homePage/extraLarge.webp 993w, https://www.trulia.com/images/app-shopping/homePage/hiDpiSmall.webp 50w, https://www.trulia.com/images/app-shopping/homePage/hiDpiMedium.webp 300w, https://www.trulia.com/images/app-shopping/homePage/hiDpiLarge.webp 600w, https://www.trulia.com/images/app-shopping/homePage/hiDpiExtraLarge.webp 1000w"
        id="homepage-banner-image"
        sizes="
  (max-width: 569px) and (-webkit-min-device-pixel-ratio: 3) 25px,
  (min-width: 570px) and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 3) 75px,
  (min-width: 768px) and (max-width: 992px) and (-webkit-min-device-pixel-ratio: 3) 300px,

  (max-width: 569px) and (-webkit-min-device-pixel-ratio: 2) 50px,
  (min-width: 570px) and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2) 150px,
  (min-width: 768px) and (max-width: 992px) and (-webkit-min-device-pixel-ratio: 2) 300px,

  (max-width: 569px) and (-webkit-device-pixel-ratio: 1) 390px,
  (min-width: 570px) and (max-width: 767px) and (-webkit-device-pixel-ratio: 1) 570px,
  (min-width: 768px) and (max-width: 992px) and (-webkit-device-pixel-ratio: 1) 768px,
  (min-width: 993px) and (-webkit-device-pixel-ratio: 1) 993px,
  1000px
  "
        className="Image__ImageContainer-sc-7293ddb2-0 idwUwH"
      ></img>
       <Box
        sx={{
          position: "absolute",
          top: "0%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
      <Box
        sx={{
          position: "absolute",
          top: "0%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "50%",
        }}
      >
        <Typography sx={{color: 'white', fontSize: {
          sm: '16px',
          md: '24px',
          lg: '32px',
        }, fontWeight: 700, textShadow: "0 0px 5px rgba(0, 0, 0, 1)",  textAlign: 'center',}} >Discover a place to you'll love to live.</Typography>
        <Box sx={{margin: '1rem'}}>
          <ButtonGroup size="small" aria-label="Small button group">
            <StyledButton>Buy</StyledButton>
          </ButtonGroup>
          <ButtonGroup color="secondary" aria-label="Medium-sized button group">
            <StyledButton>Rent</StyledButton>
          </ButtonGroup>
          <ButtonGroup size="large" aria-label="Large button group">
            <StyledButton>Sold</StyledButton>
          </ButtonGroup>
        </Box>
        <SearchComponent />
      </Box>
      </Box>
    </Box>
  );
};

export default HomePageBanner;
