import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import BannerLogo from '../images/banner/banner-logo.png';
import BannerImage01 from '../images/banner/banner-image01.png';
import BannerImage02 from '../images/banner/banner-image02.png';
import BannerImage03 from '../images/banner/banner-image03.png';
import Typography from "@mui/material/Typography";

const backgroundLogo = {
  width: "280px",
  height: "80px",
  backgroundImage: `url(${BannerLogo})`,
  backgroundPosition: 'center',
  backgroundSize: "cover",
  marginTop: "-20px",
  marginBottom: "20px",
}

const bannerBackground01 = {
  width: '440px',
  height: '480px',
  backgroundImage: `url(${BannerImage01})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

}
const bannerBackground02 = {
  width: '280px',
  height: '400px',
  backgroundImage: `url(${BannerImage02})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

}
const bannerBackground03 = {
  width: '440px',
  height: '480px',
  backgroundImage: `url(${BannerImage03})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

}

type Props = {}

const Banner = (props: Props) => {
  return (
    <>
      <Container sx={{ marginTop: "24px" }}>
        <Grid container spacing={1}>
          <Box sx={bannerBackground01} />

          <Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box sx={backgroundLogo} />
              <Box sx={bannerBackground02} />
            </Box>
          </Box>
          <Box sx={bannerBackground03} />
        </Grid>
      </Container>
      <Box sx={{ height: "40px", backgroundColor: "secondary.main" }}>
        <Typography lineHeight="40px" textAlign="center" color="white">新規登録で１０％オフキャンペーン実施中！</Typography>
      </Box>
    </>
  )
}

export default Banner