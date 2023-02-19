import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AboutImage from '../images/about.png';
import Button from '@mui/material/Button'
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat"
const circleBackground = {
  border: '2px dotted #DDD',
  width: '500px',
  height: '500px',
  borderRadius: '50%',
  position: 'absolute',
  top: '-84px',
  left: '-72px',
  zIndex: '-1'
}

const About = () => {
  return (
    <Container sx={{ marginTop: "128px" }}>
      <Grid container spacing={2} marginTop="32px" alignItems="center">
        <Grid item xs={12} md={6}>
          <img src={AboutImage} alt="About" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', zIndex: 0 }}>
            <Box sx={circleBackground} />
            <Box sx={{ marginRight: "auto", maxWidth: "430px" }}>
              <Typography lineHeight="2.5" variant="h4" marginBottom="32px" textAlign="center">
                About
              </Typography>
              <Typography lineHeight="2.5" marginBottom="32px">
                着るだけで心が満たされていくそんなセーターを作るために
                セーターだけを販売するOnly Sweaterを立ち上げました。
              </Typography>
              <Typography lineHeight="2.5" marginBottom="32px">
                冬の季節にしか着ないセーターだけれど、
                少しこだわるだけで今年の冬を特別なものにしてもらえるように
                細部までこだわって作りました。
              </Typography>
              <Typography lineHeight="2.5" marginBottom="32px">
                あなたの冬が特別なものになりますように...
              </Typography>
            </Box>
            <Button variant="text" endIcon={<TrendingFlatIcon />}> View More</Button>
          </Box>

        </Grid>
      </Grid>
    </Container >
  )
}

export default About