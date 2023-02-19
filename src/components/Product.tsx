


import { useState } from 'react';
import Slider from "react-slick";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from "@mui/material";
import ProductImage from '../images/product.png'
import ColorOptions from "./ColorOptions";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { NextArrow, PrevArrow } from '../components/SliderNavigation'

const product = [
  { name: "product01", colors: ["#FFF", "#D9D9D9", "#B8B8B8", "#F5B05F", "#B5D3F7"], image: ProductImage },
  { name: "product02", colors: ["black", "white", "gray", "silver", "beige"], image: ProductImage },
  { name: "product03", colors: ["purple", "pink", "orange", "brown", "beige"], image: ProductImage },
  { name: "product04", colors: ["navy", "teal", "maroon", "olive", "beige"], image: ProductImage }
]

const sliderStyle = {
  margin: 'auto',
  width: '280px',
  display: 'flex',
  position: 'relative'
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

const variantColors = {
  width: '280px',
  height: '225px',
  opacity: '0.5',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  margin: 'auto',
}

const ProductSlider = () => {
  const [selectedProduct, setSelectedProduct] = useState<number>(0)
  const [selectedColor, setSelectedColor] = useState<string>(product[0].colors[0])

  const handleSelectedColor = (color: string, index: number) => {
    setSelectedProduct(index)
    setSelectedColor(color)
  }

  return (
    <Container>
      <Grid container spacing={0} justifyContent="center" wrap="wrap" alignItems="center">
        <Grid item md={12} marginTop="128px">
          <Typography textAlign="center" variant="h4" marginBottom="32px">Items</Typography>
          <Slider {...settingsslickOptions}>

            {
              product.map((item, index) => {
                return (
                  <Box sx={sliderStyle} key={item.name}>
                    <Box sx={variantColors} style={{ backgroundColor: index === selectedProduct ? selectedColor : '' }} />
                    <img src={item.image} alt="Product" width="280px" style={{ margin: 'auto' }} />
                    <Box margin="auto" width="280px">
                      <ColorOptions colors={item.colors} handleClick={(color: string) => handleSelectedColor(color, index)} />
                      <Typography>ゆったりしたセーター</Typography>
                      <Typography textAlign="right">¥ 10,000</Typography>
                    </Box>
                  </Box>
                )
              })
            }

          </Slider>
        </Grid>
        <Grid item md={12} textAlign="center">
          <Button variant="text" endIcon={<TrendingFlatIcon />}> View More</Button>
        </Grid>
      </Grid>
    </Container >
  )
}

export default ProductSlider