import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import BannerLogo from '../images/banner/banner-logo.png';
import BannerImage01 from '../images/banner/banner-image01.png';
import BannerImage02 from '../images/banner/banner-image02.png';
import BannerImage03 from '../images/banner/banner-image03.png';
import { Typography } from "@mui/material";

type Props = {}

const Banner = (props: Props) => {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img src={BannerImage01} alt="Banner Image 01" width="365" />
          </Grid>

          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img src={BannerLogo} alt="Banner Image Logo" width="160px" />
              <img src={BannerImage02} alt="Banner Image 02" width="265px" />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={BannerImage03} alt="Banner Image 03" width="365px" />
          </Grid>

          <Grid item xs={12} md={12}>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ height: "40px", backgroundColor: "secondary.main" }}>
        <Typography lineHeight="40px" textAlign="center" color="white">新規登録で１０％オフキャンペーン実施中！</Typography>
      </Box>
    </>
  )
}

export default Banner