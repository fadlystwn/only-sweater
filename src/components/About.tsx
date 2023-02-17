import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AboutImage from '../images/about.png';

const circleBackground = {
  border: '2px dotted #DDD',
  width: '500px',
  height: '500px',
  borderRadius: '50%',
  position: 'absolute',
  zIndex: '-1'
}

const About = () => {
  return (
    <Container sx={{ marginTop: "128px" }}>
      <Grid container spacing={2} marginTop="32px">
        <Grid item xs={12} md={6}>
          <img src={AboutImage} alt="About" height="600px" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', zIndex: 0 }}>
            <Box sx={circleBackground}>

            </Box>
            <Box sx={{ margin: "auto" }}>
              <Typography variant="h3" marginY="64px">
                About
              </Typography>
              <Typography marginBottom="16px">
                着るだけで心が満たされていくそんなセーターを作るために
                セーターだけを販売するOnly Sweaterを立ち上げました。
              </Typography>
              <Typography marginBottom="16px">
                冬の季節にしか着ないセーターだけれど、
                少しこだわるだけで今年の冬を特別なものにしてもらえるように
                細部までこだわって作りました。
              </Typography>
              <Typography marginBottom="16px">
                あなたの冬が特別なものになりますように...
              </Typography>
            </Box>
            <Typography>View More</Typography>
          </Box>

        </Grid>
      </Grid>
    </Container >
  )
}

export default About