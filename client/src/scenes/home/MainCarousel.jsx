import { shades } from "../../theme";

import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Imports all images from assets folder - create object with each of the item name and replace ./ in the path
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

//Put all import image in a list
const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");


  return (
    //Carousel and Arrow Icons
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showInidicators={false}
      showStatus={false}
      renderArrowPrev=
        {(onClickHandler, hasPrev, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        renderArrowNext=
        {(onClickHandler, hasNext, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateNextIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
    >
      {/* Map through Object Images /
       Object Fix makes images responsive by cutting off ends of image  */}
      {Object.values(heroTextureImports).map((texture,index) => (
        <Box key={`carousel-image-${index}`}>
          <img 
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              backgroundAttachment: "fixed"
            }}
          />
          {/* Container for text in Carousel */}
          <Box
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          >
            <Typography color={shades.secondary[200]}> --NEW ITEMS</Typography>
            <Typography variant="h1"> Summer Sales</Typography>
            <Typography 
              fontWeight="bold" 
              color={shades.secondary[300]}
              sx={{ textDecoration: "underline" }}
            > 
              Discover More
            </Typography>
          </Box>
        </Box>
      ))}

    </Carousel>
  )
}

export default MainCarousel;