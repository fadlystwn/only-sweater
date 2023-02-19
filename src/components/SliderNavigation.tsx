import React from "react";
import { IconButton, IconButtonProps } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const arrowStyle = {
  width: '64px',
  height: '64px',
  position: 'absolute',
  top: '128px',
  bottom: 0,
  opacity: 1,
}

type NextArrowProps = IconButtonProps;

const NextArrow: React.FC<NextArrowProps> = (props) => (
  <IconButton {...props} sx={arrowStyle} style={{ right: '-32px' }}>
    <ArrowForwardIosIcon fontSize="large" />
  </IconButton>

);

type PrevArrowProps = IconButtonProps;

const PrevArrow: React.FC<PrevArrowProps> = (props) => (
  <IconButton {...props} sx={arrowStyle} style={{ left: '-32px' }}>
    <ArrowBackIosIcon fontSize="large" />
  </IconButton>
);


export { NextArrow, PrevArrow }