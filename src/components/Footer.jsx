import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Link } from "@mui/material";
import RealEstateInfo from "./Footer/RealEstateInfo";

const StyledLinkHeader = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  display: {
    lg: "flex",
  },
  flexDirection: "column",
  flexGrow: 1,
  textTransform: "none",
  fontSize: "18px",
  margin: "12px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "start",
  "&:hover": {
    color: theme.palette.text.secondary,
    textDecoration: "underline",
    textDecorationColor: theme.palette.text.secondary,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  display: {
    lg: "flex",
  },
  flexDirection: "column",
  flexGrow: 1,
  textTransform: "none",
  fontSize: 12,
  margin: "12px",
  fontWeight: "normal",
  textAlign: "start",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.text.secondary,
    textDecoration: "underline",
    textDecorationColor: theme.palette.text.secondary,
  },
}));

const StyledMoreBtn = styled(Link)(({ theme }) => ({
  display: {
    lg: "flex",
  },
  flexDirection: "column",
  flexGrow: 1,
  textTransform: "none",
  fontSize: 12,
  margin: "12px",
  fontWeight: "normal",
  textAlign: "start",
  textDecoration: "none",
  color: theme.palette.text.secondary,

  "&:hover": {
    color: theme.palette.text.secondary,
    textDecoration: "underline",
    textDecorationColor: theme.palette.text.secondary,
  },
}));

const categories = [
  "Real Estate Markets",
  "Popular Searches",
  "Explore Trulia",
  "For Professionals",
];

const links = {
  "Real Estate Markets": [
    "Alaska Real Estate",
    "Alabama Real Estate",
    "Arkansas Real Estate",
    "Arizona Real Estate",
    "More",
  ],
  "Popular Searches": [
    "Houses for Rent Near Me",
    "Houses for Sale Near Me",
    "Townhomes for Rent Near Me",
    "Townhomes for Sale Near Me",
    "More",
  ],
  "Explore Trulia": ["Facebook", "Twitter", "Instagram", "Pinterest", "More"],
  "For Professionals": [
    "Popular Counties",
    "Rental Communities",
    "Real Estate Leads",
  ],
};

const Footer = () => {
  return (
    <Container
      className="footer"
      sx={{
        
        padding: "0 !important",
        margin: '0 auto',
        maxWidth: { xs: "100%", md: "80%", lg: "65%", xl: "50%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: '24px',
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        {categories.map((category) => (
          <Box sx={{ display: "flex", flexDirection: "column" }} key={category}>
            <ul className="unorderlist-items">
              <li className="header-list-item">
                <StyledLinkHeader href="#">{category}</StyledLinkHeader>
              </li>
              {links[category].map((link, index) =>
                link === "More" ? (
                  <StyledMoreBtn key={index} href="#">More</StyledMoreBtn>
                ) : (
                  <li key={link}>
                    <StyledLink href="#">{link}</StyledLink>
                  </li>
                )
              )}
            </ul>
          </Box>
        ))}
      </Box>

      <RealEstateInfo />
      
    </Container>
  );
};

export default Footer;
