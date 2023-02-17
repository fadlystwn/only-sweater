import Slider from "react-slick";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from "@mui/material";
import ProductImage from '../images/product.png'
const sliderStyle = {
  margin: 'auto',
  width: '280px',
  display: 'flex'
}

const ProductSlider = () => {
  const settingsslickOptions = {
    focusOnselect: true,
    speed: 500,
    slidesToShow: 3,
    scrollToShow: 3,
  }
  return (
    <Container>
      <Grid container spacing={0} justifyContent="center" wrap="wrap" alignItems="center">
        <Grid item md={12} marginTop="128px">
          <Typography textAlign="center" variant="h4" marginBottom="32px">Items</Typography>
          <Slider {...settingsslickOptions}>
            <Box sx={sliderStyle}>
              <img src={ProductImage} alt="Product" width="280px" style={{ margin: 'auto' }} />
              <Box margin="auto" width="280px">
                <Typography>ゆったりしたセーター</Typography>
                <Box>variant</Box>
                <Typography>¥ 10,000</Typography>
              </Box>
            </Box>
            <Box sx={sliderStyle}>
              <img src={ProductImage} alt="Product" width="280px" style={{ margin: 'auto' }} />
              <Box margin="auto" width="280px">
                <Typography>ゆったりしたセーター</Typography>
                <Box>variant</Box>
                <Typography>¥ 10,000</Typography>
              </Box>
            </Box>
            <Box sx={sliderStyle}>
              <img src={ProductImage} alt="Product" width="280px" style={{ margin: 'auto' }} />
              <Box margin="auto" width="280px">
                <Typography>ゆったりしたセーター</Typography>
                <Box>variant</Box>
                <Typography>¥ 10,000</Typography>
              </Box>
            </Box>
            <Box sx={sliderStyle}>
              <img src={ProductImage} alt="Product" width="280px" style={{ margin: 'auto' }} />
              <Box margin="auto" width="280px">
                <Typography>ゆったりしたセーター</Typography>
                <Box>variant</Box>
                <Typography>¥ 10,000</Typography>
              </Box>
            </Box>
          </Slider>
        </Grid>
        <Grid item md={12} textAlign="center">
          <Button variant="outlined">View More</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductSlider