import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import Logo from '../images/logo.svg'
import InstagramIcon from '../icons/instagram.svg'
import FacebookIcon from '../icons/facebook.svg'

const pages = ['About', 'Item', 'Shop', 'Info', 'Press'];
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <Container sx={{ marginTop: "189px" }}>
        <Grid container direction="row" md={12} alignItems="center">
          <Box display="flex" flexGrow={1} alignItems="center">
            <img src={Logo} alt="Logo" />
            <Typography color="primary">We sale only sweater</Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                variant="text"
                color="primary"
                key={page}
                sx={{ my: 2, display: 'block', textTransform: 'capitalize' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Stack direction="row" spacing={1} marginLeft="56px">
            <IconButton size="small">
              <img src={InstagramIcon} alt="instagram" width="16px" />
            </IconButton>
            <IconButton size="small">
              <img src={FacebookIcon} alt="facebook" width="16px" />
            </IconButton>
          </Stack>
        </Grid>
        <Grid container>
          <Grid item md={12} sx={{ marginTop: "86px" }}>
            <Typography>
              Tel: 0312345678
            </Typography>
            <Typography> Email: onlysweater@jp.com</Typography>
          </Grid>
          <Grid item md={12} sx={{ marginTop: "32px" }}>
            <Divider />
            <Typography paddingY="32px" textAlign="center">
              2022@only sweater
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer