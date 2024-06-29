import { Box, Typography } from "@mui/material";
import SearchComponent from "./Search";

function CheckoutNeighbourhood() {
  return (
    <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems:'center' }}>
      <Typography
        variant="body1"
        fontWeight="600"
        fontSize={20}
        color={"text.primary"}
      >
        Check out a neighborhood
      </Typography>

      <Box sx={{ margin: "2rem", width:{
        xs: '80%',
        sm: '50%',
        md: '50%',
        lg: '25%',
        xl: '25%',
      
      } }}>
        <SearchComponent />
      </Box>

      <Typography
        variant="body1"
        fontWeight="600"
        fontSize={20}
        color={"text.primary"}
        sx={{margin: '3rem'}}
      >
discover a place you'll love to live      </Typography>

    </Box>
  );
}

export default CheckoutNeighbourhood;
