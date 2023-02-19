

import { ReactElement } from 'react';
import Slider from "react-slick";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from "@mui/material";
import ProductImage from '../images/product.png'
import ColorOptions from "./ColorOptions";
import { NextArrow, PrevArrow } from '../components/SliderNavigation'

const product = [
  { name: "product01", colors: ["red", "green", "blue", "yellow"], image: ProductImage },
  { name: "product02", colors: ["black", "white", "gray", "silver"], image: ProductImage },
  { name: "product03", colors: ["purple", "pink", "orange", "brown"], image: ProductImage },
  { name: "product04", colors: ["navy", "teal", "maroon", "olive"], image: ProductImage }
]

const sliderStyle = {
  margin: 'auto',
  width: '280px',
  display: 'flex'
}

const settingsslickOptions = {
  focusOnselect: true,
  speed: 500,
  slidesToShow: 3,
  scrollToShow: 3,
  dots: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

const ProductSlider = () => {
  return (
    <Container>
      <Grid container spacing={0} justifyContent="center" wrap="wrap" alignItems="center">
        <Grid item md={12} marginTop="128px">
          <Typography textAlign="center" variant="h4" marginBottom="32px">Items</Typography>
          <Slider {...settingsslickOptions}>

            {
              product.map(item => {
                return (
                  <Box sx={sliderStyle} key={item.name}>
                    <img src={item.image} alt="Product" width="280px" style={{ margin: 'auto' }} />
                    <Box margin="auto" width="280px">
                      <ColorOptions colors={item.colors} />
                      <Typography>ゆったりしたセーター</Typography>
                      <Typography>¥ 10,000</Typography>
                    </Box>
                  </Box>
                )
              })
            }

          </Slider>
        </Grid>
        <Grid item md={12} textAlign="center">
          <Button variant="text">View More</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductSlider