import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CustomImageList from "./ImageList";

function ExploreHomesGallery() {
  return (
    <Box
      className="explore-homes-gallery"
      sx={{ marginTop: "4rem", color: "text.primary" }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            textAlign: "center",
            width: {
              xs: "100%",
              sm: "100%",
              md: "80%",
              lg: "60%",
              xl: "50%",
            },
          }}
        >
          <Typography sx={{ fontSize: "36px" }}>
            Explore homes on Trulia
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>
            Take a deep dive and browse homes for sale, original neighborhood
            photos, resident reviews and local insights to find what is right
            for you.
          </Typography>
        </Box>
      </Box>
      <CustomImageList />
    </Box>
  );
}

export default ExploreHomesGallery;
